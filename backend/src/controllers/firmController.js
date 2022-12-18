const firmModel = require("../models/firmModel");

const firmController = {
  getAllFirms: (_, res) => {
    firmModel
      .findAll()
      .then((firms) => res.status(200).send(firms))
      .catch((err) => console.error(err));
  },
  getFirmById: (req, res) => {
    const { id } = req.params;
    firmModel
      .findOne(id)
      .then(([firm]) => res.status(200).send(firm))
      .catch((err) => console.error(err));
  },
};

module.exports = firmController;
