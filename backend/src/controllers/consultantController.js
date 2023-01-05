/* eslint-disable camelcase */
const consultantModel = require("../models/consultantModel");

const consultantController = {
  getAllConsultants: (req, res, next) => {
    consultantModel
      .findAll()
      .then(([consultants]) => res.status(200).send(consultants))
      .catch((err) => next(err));
  },
  getConsultantById: (req, res, next) => {
    const { id } = req.params;
    consultantModel
      .findOne(id)
      .then(([consultant]) => res.status(200).send(consultant))
      .catch((err) => next(err));
  },
  createConsultant: (req, res, next) => {
    consultantModel
      .create(req.body)
      .then(([consultant]) => {
        if (consultant.insertId) {
          consultantModel
            .findOne(consultant.insertId)
            .then(([response]) => res.status(201).send(response));
        } else {
          res.status(400).send({ message: "Bad request" });
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = consultantController;
