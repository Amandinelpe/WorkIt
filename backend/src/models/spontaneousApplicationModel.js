const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query(
      `SELECT *, DATE_FORMAT(creation_date, "%d/%m/%Y") as creation_date_convert FROM spontaneous_application app
      JOIN job ON app.job_id = job.id 
      JOIN user ON app.user_id = user.id 
      JOIN application_state state ON app.application_state_id = state.id
      ORDER BY creation_date DESC`
    )
    .then((spontaneousApp) => spontaneousApp);
};

module.exports = { findAll };
