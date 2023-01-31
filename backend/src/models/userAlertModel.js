const db = require("../../config");

const findAllUserId = (job_id, city) => {
    return db
        .promise()
        .query(
        "SELECT user_id FROM userAlert WHERE userAlert.job_id = ? AND userAlert.city = ?",
        [job_id, city]
        )
        .then(([users]) => users);

}

module.exports = {
findAllUserId
  };
  