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
  getCandidatedByUser: (req, res, next) => {
    const { offer_id } = req.query;
    const { user_id } = req.query;
    candidatedModel
      .findOneByUser(user_id, offer_id)
      .then(([candidated]) => res.status(200).send(favorite))
      .catch((err) => next(err));
  },
  postCandidated: (req, res, next) => {
    const { user_id, offer_id } = req.body;
    candidatedModel
      .createOne({ user_id, offer_id })
      .then((candidated) => res.status(200).send(candidated))
      .catch((err) => next(err));
  },
  deleteCandidated: (req, res, next) => {
    const { id } = req.params;
    candidatedModel
      .deleteOne(id)
      .then((candidated) => res.status(200).send(candidated))
      .catch((err) => next(err));
  },
};

module.exports = candidatedController;
