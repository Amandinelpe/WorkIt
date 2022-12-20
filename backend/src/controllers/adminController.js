const adminModel = require("../models/adminModel");

const adminController = {
  getAllAdmins: (req, res) => {
    adminModel
      .findAll()
      .then(([admins]) => res.status(200).send(admins))
      .catch((err) => console.error(err).send("Admins not found"));
  },
  getAdminById: (req, res) => {
    const { id } = req.params;
    adminModel
      .findOne(id)
      .then(([admin]) => res.status(200).send(admin))
      .catch((err) => console.error(err).send("Admin not found"));
  },
};

module.exports = adminController;
