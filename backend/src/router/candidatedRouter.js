const express = require("express");

const candidatedRouter = express.Router();

const candidatedController = require("../controllers/candidatedController");

candidatedRouter.get("/", candidatedController.getAllcandidateds);
candidatedRouter.get("/user/", candidatedController.getCandidatedByUser);
candidatedRouter.post("/", candidatedController.postCandidated);
candidatedRouter.delete("/:id", candidatedController.deleteCandidated);

module.exports = candidatedRouter;
