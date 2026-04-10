const {Router} = require("express");
const router = Router();
const userMiddleware = require("../middleware2/user");


router.post("/signup", (req,res) => {
   
});

router.get("/courses", (req,res) => {
   
});

router.post('/courses/:courseId', userMiddleware, (req,res) => {
    const username = req.username;
    console.log(username);
    
});

router.get("/purchasedCourses", userMiddleware, (req,res) => {
  
})


module.exports = router;
