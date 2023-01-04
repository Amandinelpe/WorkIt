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
};

module.exports = firmController;
