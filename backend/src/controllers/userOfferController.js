const userOfferModel = require("../models/userOfferModel");

const userOfferController = {
  getAlluserOffers: (req, res, next) => {
    userOfferModel
      .findAll()
      .then(([userOffers]) => res.status(200).send(userOffers))
      .catch((err) => next(err));
  },
  getuserOfferById: (req, res, next) => {
    const { id } = req.params;
    userOfferModel
      .findOne(id)
      .then(([userOffer]) => res.status(200).send(userOffer))
      .catch((err) => next(err));
  },
  const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user where id = ?", [id])
    .then(([user]) => user);
};

const createOne = ({
  role_id,
  firstname,
  lastname,
  job_id,
  city,
  email,
  password,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO user (role_id, firstname, lastname, job_id, city, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [role_id, firstname, lastname, job_id, city, email, password]
    )
    .then((user) => user);
};

};


module.exports = userOfferController;
