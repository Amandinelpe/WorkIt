/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM favorite")
    .then(([favorites]) => favorites);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM favorite where id = ?", [id])
    .then(([favorite]) => favorite);
};

module.exports = { findAll, findOne };
