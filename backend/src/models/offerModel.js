const db = require("../../config");

const findAll = (where) => {
  const initSql = "SELECT * FROM offer";
  if (where.length > 0) {
    return db
      .promise()
      .query(`${initSql} WHERE ${where.join(" AND ")}`)
      .then((offers) => offers);
  }
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
