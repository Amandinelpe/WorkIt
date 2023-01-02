const express = require("express");

const userOfferRouter = express.Router();

const userOfferController = require("../controllers/userOfferController");

userOfferRouter.get("/", userOfferController.getAlluserOffers);
userOfferRouter.get("/:id", userOfferController.getuserOfferById);

module.exports = userOfferRouter;
