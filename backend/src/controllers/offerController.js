const offerModel = require("../models/offerModel");

const offerController = {
  getAllOffers: (_, res) => {
    offerModel
      .findAll()
      .then(([offers]) => res.status(200).send(offers))
      .catch((err) => res.status(500).send(err));
  },
  getOfferById: (req, res) => {
    const { id } = req.params;
    offerModel
      .findOne(id)
      .then(([offer]) => res.status(200).send(offer))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = offerController;
