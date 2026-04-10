const express = require("express");
const port = 3000
const application = express();


application.post("/conversation", (req,res) => {
   
 console.log(req.body );
 
 
 
    res.send({msg:"2+2=4"})
})

application.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})