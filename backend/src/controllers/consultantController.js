/* eslint-disable camelcase */
const argon2 = require("argon2");
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
  createConsultant: async (req, res, next) => {
    /*     console.log(req.body); */
    const {
      role_id,
      firstname,
      lastname,
      phone,
      city,
      email,
      password,
      linkedin,
    } = req.body;
    const hashedPassword = await argon2.hash(password);
    consultantModel
      .create({
        role_id,
        firstname,
        lastname,
        phone,
        city,
        email,
        password: hashedPassword,
        linkedin,
      })
      .then(([consultant]) => {
        if (consultant.insertId) {
          consultantModel
            .findOne(consultant.insertId)
            .then(([response]) => res.status(201).send(response));
        } else {
          res.status(400).send("consultant not created");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = consultantController;
