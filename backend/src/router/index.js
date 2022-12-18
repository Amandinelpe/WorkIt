const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const roleRouter = require("./roleRouter");
const firmRouter = require("./firmRouter");
const contractRouter = require("./contractRouter");

router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/firm", firmRouter);
router.use("/contract", contractRouter);

module.exports = router;
