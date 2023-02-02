const express = require("express");

const alertRouter = express.Router();

const alertController = require("../controllers/alertController");

alertRouter.post("/", alertController.postAlert);

module.exports = alertRouter;