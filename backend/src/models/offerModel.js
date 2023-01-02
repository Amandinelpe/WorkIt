const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM offer")
    .then((offers) => offers);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM offer where id = ?", [id])
    .then(([offer]) => offer);
};

module.exports = { findAll, findOne };
