/* eslint-disable camelcase */
const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM favorite")
    .then(([favorites]) => favorites);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM favorite where id = ?", [id])
    .then(([favorite]) => favorite);
};
const findOneByUser = (user_id, offer_id) => {

  return db
    .promise()
    .query("SELECT * FROM favorite where user_id = ? and offer_id = ?", [
      user_id,
      offer_id,
    ])
    .then(([favorite]) => favorite);
};
const createOne = (payload)=>{
    return db
    .promise()
    .query("INSERT INTO favorite SET ?", [
      payload
    ])
    .then((favorite) => favorite);
}  

const deleteOne = (id)=>{
  return db
  .promise()
  .query("DELETE from favorite WHERE favorite_id = ?", [
    id
  ])
  .then((favorite) => favorite);
}  



module.exports = { findAll, findOne, findOneByUser, createOne, deleteOne};
