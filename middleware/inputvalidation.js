const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;
  res.send("You have " + kidneysLength + " kidneys");
});


//Global catch
app.use(function(err,req,res,next){
    res.json({
        msg : "Sorry something is up with our server"
    })
})

app.listen(3000);
