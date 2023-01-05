const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (req, res, next) => {
    userModel
      .findAll()
      .then((users) => res.status(200).send(users))
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
    userModel
      .createOne(req.body)
      .then(([response]) => {
        if (response.affectedRows !== 0) {
          userModel.findOne(response.insertId).then(([user]) => res.send(user));
        } else {
          res.send("User is not created");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
