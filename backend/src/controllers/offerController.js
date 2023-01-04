const offerModel = require("../models/offerModel");

const offerController = {
  getAllOffers: (req, res, next) => {
    offerModel
      .findAll()
      .then(([offers]) => res.status(200).send(offers))
      .catch((err) => next(err));
  },
  getOfferById: (req, res, next) => {
    const { id } = req.params;
    offerModel
      .findOne(id)
      .then(([offer]) => res.status(200).send(offer))
      .catch((err) => next(err));
  },
};

module.exports = offerController;
