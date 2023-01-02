const userOfferModel = require("../models/userOfferModel");

const userOfferController = {
  getAlluserOffers: (req, res) => {
    userOfferModel
      .findAll()
      .then(([userOffers]) => res.status(200).send(userOffers))
      .catch((err) => res.status(500).send(err));
  },
  getuserOfferById: (req, res) => {
    const { id } = req.params;
    userOfferModel
      .findOne(id)
      .then(([userOffer]) => res.status(200).send(userOffer))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = userOfferController;
