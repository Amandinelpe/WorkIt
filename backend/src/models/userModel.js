/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then((users) => users);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user where id = ?", [id])
    .then(([user]) => user);
};

const createOne = ({
  role_id,
  firstname,
  lastname,
  job_id,
  city,
  email,
  password,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO user (role_id, firstname, lastname, job_id, city, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [role_id, firstname, lastname, job_id, city, email, password]
    )
    .then((user) => user);
};

module.exports = { findAll, findOne, createOne };
