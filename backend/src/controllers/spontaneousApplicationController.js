const spontaneousApplicationModel = require("../models/spontaneousApplicationModel");

const spontaneousApplicationController = {
  getAllSpontaneousApplication: (_, res, next) => {
    spontaneousApplicationModel
      .findAll()
      .then(([spontaneousApp]) => res.status(200).send(spontaneousApp))
      .catch((err) => next(err));
  },
};

module.exports = spontaneousApplicationController;
