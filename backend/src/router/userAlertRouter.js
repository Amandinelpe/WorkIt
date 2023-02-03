const express = require("express");

const userAlertRouter = express.Router();

const userAlertController = require("../controllers/userAlertController");

userAlertRouter.get("/", userAlertController.getAllUserId);
userAlertRouter.post("/", userAlertController.createUserAlert);
userAlertRouter.delete("/:id", userAlertController.deleteUserAlert);
userAlertRouter.put("/", userAlertController.modifyUserAlert);
userAlertRouter.get("/myUserAlerts/:id", userAlertController.findUserAlert);

module.exports = userAlertRouter;
