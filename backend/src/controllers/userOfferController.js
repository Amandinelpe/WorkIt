const userOfferModel = require("../models/userOfferModel");

const userOfferController = {
  getAlluserOffers: (req, res) => {
    userOfferModel
      .findAll()
      .then(([userOffers]) => res.status(200).send(userOffers))
      .catch((err) => console.error(err));
  },
  getuserOfferById: (req, res) => {
    const { id } = req.params;
    userOfferModel
      .findOne(id)
      .then(([userOffer]) => res.status(200).send(userOffer))
      .catch((err) => console.error(err).send("Communication failed"));
  },
};

module.exports = userOfferController;
