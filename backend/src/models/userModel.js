const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then(([users]) => users);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user where id = ?", [id])
    .then(([user]) => user);
};

const createOne = (newUser) => {
  return db
    .promise()
    .query(
      "INSERT INTO user (firstname, lastname, job, city, password) VALUES ?",
      [newUser]
    )
    .then((user) => user);
};

module.exports = { findAll, findOne, createOne };
