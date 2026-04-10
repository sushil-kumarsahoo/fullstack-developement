const express = require("express");

const app = express();

let requestCount = 0;

//you have been given an express server which has few endpoints your tsk is to create a global middleware which will mintain the count of total requests made to the server  in the global variable 
 
app.use(function(req,res,next){
    requestCount = requestCount + 1;
    next();
})

app.get("/user", function(req,res){
    res.status(200).json({ name : "sushil"});
});

app.post("user", function(req,res){
    res.status(200).json({ msg: "created dummy user"});
});

app.get("/requestcount", function(req,res){
    res.status(200).json({requestCount});
});


app.listen(3000);