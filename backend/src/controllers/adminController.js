const adminModel = require("../models/adminModel");

const adminController = {
  getAllAdmins: (req, res) => {
    adminModel
      .findAll()
      .then(([admins]) => res.status(200).send(admins))
      .catch((err) => res.status(500).send(err));
  },
  getAdminById: (req, res) => {
    const { id } = req.params;
    adminModel
      .findOne(id)
      .then(([admin]) => res.status(200).send(admin))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = adminController;
