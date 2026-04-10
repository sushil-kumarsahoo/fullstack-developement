const express = require("express");

const app = express();

let numberOfRequestForUser = {};
setInterval(() => {
  numberOfRequestForUser = {};
}, 10000);

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];

  if (numberOfRequestForUser[userId]) {
    numberOfRequestForUser[userId] = numberOfRequestForUser[userId] + 1;
    if (numberOfRequestForUser[userId] > 5) {
      return res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestForUser[userId] = 1;
    next();
  }
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000);
