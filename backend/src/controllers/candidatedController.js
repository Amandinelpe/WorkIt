const candidatedModel = require("../models/candidatedModel");

const candidatedController = {
  getAllcandidateds: (req, res, next) => {
    candidatedModel
      .findAll()
      .then((candidateds) => res.status(200).send(candidateds))
      .catch((err) => next(err));
  },
  getcandidatedById: (req, res, next) => {
    const { id } = req.params;
    candidatedModel
      .findOne(id)
      .then(([candidated]) => res.status(200).send(candidated))
      .catch((err) => next(err));
  },
};

module.exports = candidatedController;
