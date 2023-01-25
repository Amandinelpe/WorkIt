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
const findOneByUser = (user_id, offer_id) => {
  console.log(user_id, offer_id);
  return db
    .promise()
    .query("SELECT * FROM favorite where user_id = ? and offer_id = ?", [
      user_id,
      offer_id,
    ])
    .then(([favorite]) => favorite);
};

module.exports = { findAll, findOne, findOneByUser };
