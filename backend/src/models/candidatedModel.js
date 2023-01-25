/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM candidated")
    .then(([candidateds]) => candidateds);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM candidated where id = ?", [id])
    .then(([candidated]) => candidated);
};

module.exports = { findAll, findOne };
