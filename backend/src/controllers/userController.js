const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (req, res, next) => {
    userModel
      .findAll()
      .then(([users]) => res.status(200).send(users))
      .catch((err) => next(err));
  },
  getUserById: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => next(err));
  },
  createUser: (req, res, next) => {
    const newUser = req.body;
    userModel
      .createOne(newUser)
      .then(([user]) => res.status(201).send(user))
      .catch((err) => next(err));
  },
};

module.exports = userController;
