const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM firm")
    .then(([firms]) => firms);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM firm where id = ?", [id])
    .then(([firm]) => firm);
};

module.exports = { findAll, findOne };
