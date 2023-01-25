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

const findOfferByFirm = () => {
  return db
    .promise()
    .query("SELECT firm_id, COUNT(*) FROM externatic.offer GROUP BY firm_id")
    .then(([firmOffers]) => firmOffers);
};

module.exports = { findAll, findOne, findOfferByFirm };
