const adminModel = require("../models/adminModel");

const adminController = {
  getAllAdmins: (req, res, next) => {
    adminModel
      .findAll()
      .then(([admins]) => res.status(200).send(admins))
      .catch((err) => next(err));
  },
  getAdminById: (req, res, next) => {
    const { id } = req.params;
    adminModel
      .findOne(id)
      .then(([admin]) => res.status(200).send(admin))
      .catch((err) => next(err));
  },
};

module.exports = adminController;
