const roleModel = require("../models/roleModel");

const roleController = {
  getAllRoles: (_, res) => {
    roleModel
      .findAll()
      .then(([roles]) => res.status(200).send(roles))
      .catch((err) => console.error(err).send("Communication failed"));
  },
  getRoleById: (req, res) => {
    const { id } = req.params;
    roleModel
      .findOne(id)
      .then(([role]) => res.status(200).send(role))
      .catch((err) => console.error(err).send("Communication failed"));
  },
};

module.exports = roleController;
