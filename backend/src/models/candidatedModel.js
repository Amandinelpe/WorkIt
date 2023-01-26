/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM candidated")
    .then(([candidateds]) => candidateds);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM candidated where id = ?", [id])
    .then(([candidated]) => candidated);
};

const findOneByUser = (user_id, offer_id) => {
  return db
    .promise()
    .query("SELECT * FROM candidated where user_id = ? and offer_id = ?", [
      user_id,
      offer_id,
    ])
    .then(([candidated]) => candidated);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO candidated SET ?", [payload])
    .then((candidated) => candidated);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE from candidated WHERE candidated_id = ?", [id])
    .then((candidated) => candidated);
};
const findAllByUser = (user_id) => {
  return db
    .promise()
    .query("SELECT offer.id, firm.name, offer.title, offer.date, firm_city, firm.logo_url  FROM offer JOIN job ON offer.job_id = job.id JOIN firm ON offer.firm_id = firm.id JOIN candidated ON candidated.offer_id = offer.id where user_id = ?", [user_id])
    .then(([applications]) => applications);
}

module.exports = { findAll, findOne, findOneByUser, createOne, deleteOne, findAllByUser };
