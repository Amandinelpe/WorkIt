const express = require("express");

const consultantRouter = express.Router();

const consultantController = require("../controllers/consultantController");

consultantRouter.get("/", consultantController.getAllConsultants);
consultantRouter.get("/:id", consultantController.getConsultantById);

module.exports = consultantRouter;
