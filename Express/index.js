const express = require('express');

const app = express();

const users = [{
    name:'john',
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json())

app.get('/', function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys = healthyKidneys + 1;
        }
    }
    const unHealthyKidneys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post('/',function(req,res){
    console.log(req.body);
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for(let i =0;i<users[0].kidneys.length; i++){
        users[0 ].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
           newKidneys.push({
            healthy:true
           })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})
    }
    else {
        res.status(411).json({
            msg:"You have no bad kidneys"
        });
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
   let atleastOneHealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
          atleastOneHealthyKidney=true;
        }
    }
    return atleastOneHealthyKidney
}

app.listen(3000);