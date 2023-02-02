const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM alert")
    .then((alert) => alert);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM alert where id = ?", [id])
    .then(([alert]) => alert);
};

const create = (alert) => {
    return db
        .promise()
        .query("INSERT INTO alert SET ?", [alert])
        .then((alert) => alert);
};



module.exports = { findAll, findOne, create };
