const express = require("express");

const offerRouter = express.Router();

const offerController = require("../controllers/offerController");

offerRouter.get("/", offerController.getAllOffers);
offerRouter.get("/:id", offerController.getOfferById);

module.exports = offerRouter;
