/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM consultant")
    .then((consultants) => consultants);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM consultant where id = ?", [id])
    .then(([consultant]) => consultant);
};

const create = ({
  role_id,
  firstname,
  lastname,
  phone,
  city,
  email,
  password,
  linkedin,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO consultant (role_id, firstname, lastname, phone, city, email, password, linkedin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [role_id, firstname, lastname, phone, city, email, password, linkedin]
    )
    .then(([consultant]) => consultant);
};

module.exports = { findAll, findOne, create };
