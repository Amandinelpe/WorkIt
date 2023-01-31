const express = require("express");

const userAlertRouter = express.Router();

const userAlertController = require("../controllers/userAlertController");

userAlertRouter.get("/", userAlertController.getAllUserId);

module.exports = userAlertRouter;
