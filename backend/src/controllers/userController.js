const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (req, res) => {
    userModel
      .findAll()
      .then(([users]) => res.status(200).send(users))
      .catch((err) => console.error(err).send("Users not found"));
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => console.error(err).send("User not found"));
  },
};

module.exports = userController;
