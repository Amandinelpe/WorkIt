const express = require("express");

const consultantRouter = express.Router();

const consultantController = require("../controllers/consultantController");
const authenticationConsultant = require("../middlewares/authenticationConsultant");

consultantRouter.post("/login", consultantController.login);
consultantRouter.get(
  "/",
  authenticationConsultant,
  consultantController.getAllConsultants
);
consultantRouter.get("/:id", consultantController.getConsultantById);
consultantRouter.post("/create", consultantController.createConsultant);

module.exports = consultantRouter;
