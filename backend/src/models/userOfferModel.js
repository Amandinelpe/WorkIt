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

module.exports = { findAll, findOne };
