const roleModel = require("../models/roleModel");

const roleController = {
  getAllRoles: (req, res) => {
    roleModel
      .findAll()
      .then((roles) => res.status(200).send(roles))
      .catch((err) => console.error(err));
  },
  getRoleById: (req, res) => {
    const { id } = req.params;
    roleModel
      .findOne(id)
      .then(([role]) => res.status(200).send(role))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = roleController;
