const offerModel = require("../models/offerModel");

const offerController = {
  getAllOffers: (req, res, next) => {
    const where = [];

    if (req.query.city != null) {
      where.push(`firm_city = '${req.query.city}'`);
    }
    if (req.query.state != null) {
      where.push(`state_offer_id = '${req.query.state}'`);
    }

    offerModel
      .findAll(where)
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
};

module.exports = offerController;
