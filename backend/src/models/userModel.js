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

module.exports = { findAll, findOne };
