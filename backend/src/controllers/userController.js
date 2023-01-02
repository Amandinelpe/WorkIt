const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (req, res) => {
    userModel
      .findAll()
      .then(([users]) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = userController;
