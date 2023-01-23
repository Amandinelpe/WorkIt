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

const findOfferByFirm = (id) => {
  return db
    .promise()
    .query("SELECT COUNT(*) FROM offer WHERE firm_id = ?", [id])
    .then(([number]) => number);
};

module.exports = { findAll, findOne, findOfferByFirm };
