const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const roleRouter = require("./roleRouter");
const adminRouter = require("./adminRouter");

router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/admin", adminRouter);

module.exports = router;
