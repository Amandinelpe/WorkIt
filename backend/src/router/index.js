const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const roleRouter = require("./roleRouter");
const jobRouter = require("./jobRouter");
const offerRouter = require("./offerRouter");

router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/job", jobRouter);
router.use("/offer", offerRouter);

module.exports = router;
