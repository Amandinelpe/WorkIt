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
const findAllCities = () => {
  return db
    .promise()
    .query("SELECT firm_city FROM offer")
    .then((cities) => cities);
};

module.exports = { findAll, findOne, findAllCities };
