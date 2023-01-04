const contractModel = require("../models/contractModel");

const contractController = {
  getAllContracts: (_, res) => {
    contractModel
      .findAll()
      .then((contracts) => res.status(200).send(contracts))
      .catch((err) => console.error(err));
  },
  getContractById: (req, res) => {
    const { id } = req.params;
    contractModel
      .findOne(id)
      .then(([contract]) => res.status(200).send(contract))
      .catch((err) => console.error(err));
  },
};

module.exports = contractController;
