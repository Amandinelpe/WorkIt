const express = require("express");
/* Will serve later
 */ /* const multer = require"multer"); */

/* const uploadCv = multer({ dest: "uploadsCV/" }); */

const router = express.Router();
const userRouter = require("./userRouter");
const roleRouter = require("./roleRouter");
const firmRouter = require("./firmRouter");
const contractRouter = require("./contractRouter");
const jobRouter = require("./jobRouter");
const offerRouter = require("./offerRouter");
const consultantRouter = require("./consultantRouter");
const experienceRouter = require("./experienceRouter");
const urgencyRouter = require("./urgencyRouter");
const stateOfferRouter = require("./stateOfferRouter");
const userOfferRouter = require("./userOfferRouter");
const spontaneousApplicationRouter = require("./spontaneousApplicationRouter");

router.use("/firm", firmRouter);
router.use("/contract", contractRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/consultant", consultantRouter);
router.use("/experience", experienceRouter);
router.use("/job", jobRouter);
router.use("/offer", offerRouter);
router.use("/userOffer", userOfferRouter);
router.use("/urgence", urgencyRouter);
router.use("/state_offer", stateOfferRouter);
router.use("/spontaneous_application", spontaneousApplicationRouter);

module.exports = router;
