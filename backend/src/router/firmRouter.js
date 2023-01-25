const express = require("express");

const firmRouter = express.Router();
const firmController = require("../controllers/firmController");

firmRouter.get("/", firmController.getAllFirms);
firmRouter.get("/:id", firmController.getFirmById);
firmRouter.get("/o", firmController.getFirmOfferById);

module.exports = firmRouter;
