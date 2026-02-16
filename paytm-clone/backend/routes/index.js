const express = require("express");
const router = express.Router();

const userRouter = require('./user');
const accountRoter = require('./account');
router.use("/user",userRouter);
router.use("/account",accountRouter);

module.exports = router;
