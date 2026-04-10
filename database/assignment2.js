const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes2/admin");
const userRouter = require("./routes2/user");



app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});

