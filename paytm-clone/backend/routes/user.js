const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../models/userModel");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {authMiddleware} = require("../middleware")


router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    })),
  });
});

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email alraedy taken / Incorrect inputs",
    });
  }
  const Existinguser = await User.findOne({
    username: body.username,
  });

  if (Existinguser) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const dbUser = await User.create({
    username: req.body.username,
    password: hashedPassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  const userId = dbUser._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 1000
  })

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
  );

  res.json({
    message: "user created successfully",
    token: token,
  });
});


const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs!",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
  });

if(!user){
    return res.status(401).json({
        message: "Invalid credentials"
    })
}

const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
)

if(!isPasswordCorrect){
    return res.status(401).json({
        message:"Invalid credentials"
    })
}

    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  });

  const updateBody = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});

router.put("/",authMiddleware, async(req,res) => {
   const parsed = updateBody.safeParse(req.body);

   if(!parsed.success){
    return res.status(411).json({
        message:"error while updating information!"
    });
   }
   const {firstname,lastname,password} = parsed.data;
   const updateData = {};

   if (firstname) {
    updateData.firstname = firstname;
  }

  if (lastname) {
    updateData.lastname = lastname;
  }

   if(password){
    const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
   }

   await User.updateOne({
    _id:req.userId
   },updateData);

   res.json({
    message:"updated successfully"
   });

});


module.exports = router;
