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

module.exports = { findAll, findOne };
