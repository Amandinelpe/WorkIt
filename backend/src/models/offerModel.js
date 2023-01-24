const db = require("../../config");

const findAll = (where) => {
  const initSql = "SELECT * FROM offer";
  if (where.length > 0) {
    return db
      .promise()
      .query(`${initSql} WHERE ${where.join(" AND ")}`)
      .then((offers) => offers);
  }
  return db
    .promise()
    .query(
      "SELECT * FROM offer JOIN job ON offer.job_id = job.id JOIN firm ON offer.firm_id = firm.id JOIN experience ON offer.experience_id = experience.id "
    )
    .then((offers) => offers);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM offer JOIN job ON offer.job_id = job.id JOIN firm ON offer.firm_id = firm.id JOIN experience ON offer.experience_id = experience.id WHERE offer.id = ?", [id])
    .then(([offer]) => offer);
};
const findAllCities = () => {
  return db
    .promise()
    .query("SELECT DISTINCT firm_city FROM offer")
    .then((cities) => cities);
};

const findOffersByCity = (city) => {
  return db
    .promise()
    .query("SELECT * FROM offer where firm_city = ?", [city])
    .then(([offers]) => offers);
};
const findOffersByState = (where, limit) => {
  const initialSql =
    "SELECT * FROM offer JOIN job ON offer.job_id = job.id JOIN firm ON offer.firm_id = firm.id JOIN experience ON offer.experience_id = experience.id ";
  const states = where.map(({ value }) => value);
  states.push(Number(limit));
  return db
    .promise()
    .query(
      `${where.reduce(
        (sql, { column, operator }, index) =>
          `${sql} ${index === 0 ? "where" : "and"} ${column} ${operator} ? `,

        initialSql
      )} LIMIT  ?`,

      states
    )
    .then(([offers]) => offers);
};

module.exports = {
  findAll,
  findOne,
  findAllCities,
  findOffersByCity,
  findOffersByState,
};
