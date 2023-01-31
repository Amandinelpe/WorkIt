const firmModel = require("../models/firmModel");

const firmController = {
  getAllFirms: (req, res, next) => {
    firmModel
      .findAll()
      .then((firms) => res.status(200).send(firms))
      .catch((err) => next(err));
  },
  getFirmById: (req, res, next) => {
    const { id } = req.params;
    firmModel
      .findOne(id)
      .then(([firm]) => res.status(200).send(firm))
      .catch((err) => next(err));
  },
  getFirmOffer: (req, res, next) => {
    firmModel
      .findOfferByFirm()
      .then((firmOffers) => res.status(200).send(firmOffers))
      .catch((err) => next(err));
  },
  createFirm: (req, res, next) => {
    const firm = req.body;
    console.log(firm, "firm")
    firmModel
      .createFirm(firm)
      .then((reponse) => res.status(200).send(reponse))
      .catch((err) => next(err));
  }
};

module.exports = firmController;
