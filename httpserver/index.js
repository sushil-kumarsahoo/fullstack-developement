const express = require("express");
const port = 3000
const application = express();


application.get("/", (req,res) => {
   
 
    res.send('Hello world!')
})

application.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})