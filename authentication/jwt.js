const jwt = require("jsonwebtoken");

const value = {
    name: "sushil",
    ccountNumber: 123123123
}

// token generated using diffrent scret key from jwt file and if we verify the generated token using that secret key it will give error

//but but if we verify the token using the same secret key it will work fine

const token = jwt.sign(value, "secret")
console.log(token);


// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VzaGlsIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3NjU0NjQ4MzN9.-7UFjpU6T5628suialbA02PD_OJmYh0rQsxmREJ6EDk", "secret");

