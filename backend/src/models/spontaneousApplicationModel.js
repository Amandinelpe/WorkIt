const db = require("../../config");

const findAll = () => {
  return (
    db
      .promise()
      .query()
      // .query(
      //   `SELECT * FROM candidated
      //   JOIN offer ON candidated.offer_id = offer.id
      //   JOIN user ON candidated.user_id = user.id
      //   JOIN application_state state ON app.application_state_id = state.id
      //   ORDER BY creation_date DESC`
      // )
      .then((spontaneousApp) => spontaneousApp)
  );
};

module.exports = { findAll };
