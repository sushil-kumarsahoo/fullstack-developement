const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username:"sushilk",
        password: "123",
        name: "sushil"
    },
    {
        username:"sushikmr@gmail.com",
        password: "12433",
        name: "sushilkmr"
    },
    {
        username:"suk@gmail.com",
        password: "12983",
        name: "sus"
    },
];

function userExists(username,password){
let userExists = false;

  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        userExists = true;
    }
  }
return userExists;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "User dosenot exist in our in memory db",
        });
    }

    var token = jwt.sign({ username:username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req,res){
    const token = req.headers.authorization;
const decoded =jwt.verify(token, jwtPassword);
 const username = decoded.username;
    // try{
    //     const decoded =jwt.verify(token, jwtPassword);
    //     const username = decoded.username;
    // } catch {
    //     return res.status(403).json({
    //         msg: "Invalid token",
    //     });
    // }

    res.json({
           msg: ALL_USERS,
        })
});

app.listen(3000);