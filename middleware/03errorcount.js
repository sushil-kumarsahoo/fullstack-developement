const express = require('express');

const app = express();
let errorCount = 0;


 

app.get('/user', function(req,res){
    throw new Error("user not found");
    res.status(200).json({ name : "sushil"});
});
app.post('/user', function(req,res){
    
    res.status(200).json({ msg : "created dummy user"});
});
app.get('/errorcount', function(req,res){
   
    res.status(200).json({errorCount});
});


 app.use(function(err,req,res,next){
    res.status(404) .send("something is broken!")
    errorCount = errorCount + 1;
 })

app.listen(3000);