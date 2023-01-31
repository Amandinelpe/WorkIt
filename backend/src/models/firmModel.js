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
      "select firm_id, name, contact_phone, email, city, count(*) as 'nbreoffers' from offer  join firm on offer.firm_id = firm.id  group by firm_id"
    )
    .then(([firmOffers]) => firmOffers);
};

const createFirm = (firm) => {
  
  return db
    .promise()
    .query("INSERT INTO firm SET ?", [firm])
    .then(([reponse]) => reponse);
};

module.exports = { findAll, findOne, findOfferByFirm, createFirm };
