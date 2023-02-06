const db = require("../../config");

// eslint-disable-next-line camelcase
const findAllUserId = (job_id, city) => {
  return db
    .promise()
    .query(
      "SELECT user_id FROM userAlert WHERE userAlert.job_id = ? AND userAlert.city = ?",
      // eslint-disable-next-line camelcase
      [job_id, city]
    )
    .then(([users]) => users);
};

// eslint-disable-next-line camelcase
const findUserAlert = (user_id) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log(user_id);
  return db
    .promise()
    .query(
      "SELECT * FROM userAlert JOIN job on job.id = userAlert.job_id WHERE user_id = ?",
      // eslint-disable-next-line camelcase
      [user_id]
    )
    .then(([users]) => users);
};

// eslint-disable-next-line camelcase
const createUserAlert = (user_id, job_id, city) => {
  return db
    .promise()
    .query("INSERT INTO userAlert (user_id, job_id, city) VALUES (?, ?, ?)", [
      // eslint-disable-next-line camelcase
      user_id,
      // eslint-disable-next-line camelcase
      job_id,
      city,
    ])
    .then(([users]) => users);
};

// eslint-disable-next-line camelcase, no-undef
deleteUserAlert = async (userAlert_id) => {
  const users = await db
    .promise()
    // eslint-disable-next-line camelcase
    .query("DELETE FROM userAlert WHERE userAlert_id = ?", [userAlert_id]);
  return users;
};
// eslint-disable-next-line no-undef, camelcase
modifyUserAlert = async (user_id, job_id, city) => {
  const [users] = await db.promise().query(
    "UPDATE userAlert SET user_id = ?, job_id = ?, city = ? WHERE userAlert_id = ?",
    // eslint-disable-next-line no-undef, camelcase
    [user_id, job_id, city, id]
  );
  return users;
};

module.exports = {
  findAllUserId,
  createUserAlert,
  // eslint-disable-next-line no-undef
  deleteUserAlert,
  // eslint-disable-next-line no-undef
  modifyUserAlert,
  findUserAlert,
};
