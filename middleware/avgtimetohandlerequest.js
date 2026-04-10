const { timeLog } = require('console');
const express = require('express')

const app = express();

let totalTime =0;
let requestCount =0;


function timeTracker(req,res,next){
    const start = Date.now();

    res.on("finish",() => {
        const end = Date.now();
        const time = end -start;
         totalTime += time;
        requestCount+= 1;

        console.log(`Request took: ${time} ms`);
        console.log(`Average time: ${totalTime/requestCount} ms`);
        
    });
    next();
}

app.use(timeTracker);

app.get("/", function(req,res){
res.send("Hello Sushil!");
})

app.listen(3000);