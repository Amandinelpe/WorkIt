const userOfferModel = require("../models/userOfferModel");

const userOfferController = {
  getAlluserOffers: (req, res, next) => {
    userOfferModel
      .findAll()
      .then(([userOffers]) => res.status(200).send(userOffers))
      .catch((err) => next(err));
  },
  getuserOfferById: (req, res, next) => {
    const { id } = req.params;
    userOfferModel
      .findOne(id)
      .then(([userOffer]) => res.status(200).send(userOffer))
      .catch((err) => next(err));
  },
};

module.exports = userOfferController;
