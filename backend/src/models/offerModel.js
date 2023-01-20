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
    .query("SELECT DISTINCT firm_city FROM offer")
    .then((cities) => cities);
};

const findOffersByCity = (city) => {
  return db
    .promise()
    .query("SELECT * FROM offer where firm_city = ?", [city])
    .then(([offers]) => offers);
};

module.exports = { findAll, findOne, findAllCities, findOffersByCity };
