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
  getOffersByCity: (req, res, next) => {
    const { city } = req.params;
    offerModel
      .findOffersByCity(city)
      .then(([offers]) => res.status(200).send(offers))
      .catch((err) => next(err));
  },

  getOffersByState: (req, res, next) => {
    const where = [];
    const { limit } = req.query;
    if (req.query.city != null) {
      where.push({
        column: "firm_city",
        value: req.query.city,
        operator: "=",
      });
    }
    if (req.query.job_id != null) {
      where.push({
        column: "job_id",
        value: req.query.job_id,
        operator: "=",
      });
    }
    if (req.query.salary != null) {
      where.push({
        column: "salary",
        value: req.query.salary,
        operator: ">=",
      });
    }
    if (req.query.date != null) {
      where.push({
        column: "date",
        value: req.query.date,
        operator: ">=",
      });
    }
    offerModel
      .findOffersByState(where, limit)
      .then((offers) => res.status(200).send(offers))
      .catch((err) => next(err));
  },
};

module.exports = offerController;
