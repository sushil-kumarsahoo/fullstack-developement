const { log } = require('console');
const express = require('express');

const app = express();


//ugly way to do authentication using middlewares

// app.get("/health-checkup", function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyid = req.query.kidneyid;

//     if(username === "sushil" && password === "pass"){
//         if(kidneyid == 1 || kidneyid == 2){
//            res.json({
//             msg:"your kidney is fine"
//         })   
//       }
//     }
//     res.status(400).json({
//         "msg" : "Somethings up with your inputs" 
//     })
// });
 
let numberOfRequests = 0;

function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    
    next();

}

app.use(calculateRequests)


app.post('/health-checkup', function(req,res){
    
});

app.get('/health-checkup2', function(req,res){

 });

// app.get('/health-checkup',calculateRequests, function(req,res){
    
// })
// app.get('/health-checkup2',calculateRequests, function(req,res){

// })



app.listen(3000);