const consultantModel = require("../models/consultantModel");

const consultantController = {
  getAllConsultants: (_, res) => {
    consultantModel
      .findAll()
      .then(([consultants]) => res.status(200).send(consultants))
      .catch((err) => console.error(err));
  },
  getConsultantById: (req, res) => {
    const { id } = req.params;
    consultantModel
      .findOne(id)
      .then(([consultant]) => res.status(200).send(consultant))
      .catch((err) => console.error(err));
  },
};

module.exports = consultantController;
