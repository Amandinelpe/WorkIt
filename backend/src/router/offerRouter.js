const express = require("express");

const offerRouter = express.Router();

const offerController = require("../controllers/offerController");

offerRouter.get("/", offerController.getAllOffers);
offerRouter.get("/cities", offerController.getAllCities);
offerRouter.get("/:id", offerController.getOfferById);
offerRouter.get("/city/:city", offerController.getOffersByCity);

module.exports = offerRouter;
