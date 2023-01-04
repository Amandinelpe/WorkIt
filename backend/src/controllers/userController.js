const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (_, res) => {
    userModel
      .findAll()
      .then((users) => res.status(200).send(users))
      .catch((err) => console.error(err));
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  },
  createUser: (req, res) => {
    const newUser = req.body;
    userModel
      .createOne(newUser)
      .then(([user]) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = userController;
