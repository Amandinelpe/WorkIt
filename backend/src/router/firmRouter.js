const express = require("express");

const firmRouter = express.Router();
const firmController = require("../controllers/firmController");

firmRouter.get("/", firmController.getAllFirms);
firmRouter.get("/offer", firmController.getFirmOffer);
firmRouter.post("/createFirm", firmController.createFirm);
firmRouter.get("/:id", firmController.getFirmById);

module.exports = firmRouter;
