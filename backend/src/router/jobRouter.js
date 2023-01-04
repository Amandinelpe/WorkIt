const express = require("express");

const jobRouter = express.Router();

const jobController = require("../controllers/jobController");

jobRouter.get("/", jobController.getAllJobs);
jobRouter.get("/jobtitles", jobController.getAllTitles);
jobRouter.get("/:id", jobController.getJobById);

module.exports = jobRouter;
