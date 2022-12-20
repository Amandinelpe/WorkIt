const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const roleRouter = require("./roleRouter");
const consultantRouter = require("./consultantRouter");
const experienceRouter = require("./experienceRouter");

router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/consultant", consultantRouter);
router.use("/experience", experienceRouter);

module.exports = router;
