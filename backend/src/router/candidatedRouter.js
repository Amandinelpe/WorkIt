const express = require("express");

const candidatedRouter = express.Router();

const candidatedController = require("../controllers/candidatedController");

candidatedRouter.get("/", candidatedController.getAllcandidateds);

module.exports = candidatedRouter;
