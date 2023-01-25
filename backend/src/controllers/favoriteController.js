const favoriteModel = require("../models/favoriteModel");

const favoriteController = {
  getAllfavorites: (req, res, next) => {
    favoriteModel
      .findAll()
      .then((favorites) => res.status(200).send(favorites))
      .catch((err) => next(err));
  },
  getfavoriteById: (req, res, next) => {
    const { id } = req.params;
    favoriteModel
      .findOne(id)
      .then(([favorite]) => res.status(200).send(favorite))
      .catch((err) => next(err));
  },
  getfavoriteByUser: (req, res, next) => {
    const offer_id = req.query.offer_id;
    const user_id = req.query.user_id;
    favoriteModel
      .findOneByUser(user_id, offer_id)
      .then(([favorite]) => res.status(200).send(favorite))
      .catch((err) => next(err));
  }
};

module.exports = favoriteController;
