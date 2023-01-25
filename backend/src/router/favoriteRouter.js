const express = require("express");

const favoriteRouter = express.Router();

const favoriteController = require("../controllers/favoriteController");

favoriteRouter.get("/", favoriteController.getAllfavorites);
favoriteRouter.get("/user/", favoriteController.getfavoriteByUser);

module.exports = favoriteRouter;
