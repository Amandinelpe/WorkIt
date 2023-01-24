const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM userOffer")
    .then(([userOffers]) => userOffers);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM userOffer where id = ?", [id])
    .then(([userOffer]) => userOffer);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO userOffer SET ?", [payload])
    .then((userOffer) => userOffer);
};

module.exports = { findAll, findOne, createOne };
