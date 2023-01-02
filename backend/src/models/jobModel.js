const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM job")
    .then((jobs) => jobs);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM job where id = ?", [id])
    .then(([job]) => job);
};

module.exports = { findAll, findOne };
