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
  getAllCities: (req, res, next) => {
    offerModel
      .findAllCities()
      .then(([cities]) => res.status(200).send(cities))
      .catch((err) => next(err));
  },
  getOffersByCity: (req, res, next) => {
    const { city } = req.params;
    offerModel
      .findOffersByCity(city)
      .then(([offers]) => res.status(200).send(offers))
      .catch((err) => next(err));
  },
};

module.exports = offerController;
