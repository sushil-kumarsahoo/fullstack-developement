const jwt = require("jsonwebtoken");

const value = {
    name: "sushil",
    accountNumber: 123123123
}

// token generated using diffrent scret key from jwt file and if we verify the generated token using that secret key it will give error

//but but if we verify the token using the same secret key it will work fine

const token = jwt.sign(value, "hshshsh");
console.log(token);
