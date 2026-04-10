const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://usernme:password@cluster0.tnacnax.mongodb.net/')

const User = mongoose.model('Users', { name: String, emil: String, password: String});

app.post("/signup",  async function(req,res){
 const username = req.body.username;
 const password = req.body.password;
 const name = req.body.name;

 const existingUser = await User.findOne({emil: username});
 if(existingUser){
    return res.status(403).json({
        msg: "User already exists",
    })
 }
const user = new User({
    name: name,
    emil:username,
    password: password,
 });

 user.save();
res.json({
    msg: "User signed up successfully",
})

});

app.listen(3000);

