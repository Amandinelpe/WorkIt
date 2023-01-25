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
    .query(
      "select firm_id, name, email, city, count(*) as 'nbreoffers' from offer inner join firm on offer.firm_id = firm.id group by firm_id"
    )
    .then(([firmOffers]) => firmOffers);
};

module.exports = { findAll, findOne, findOfferByFirm };
