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

  const findUserAlert = (user_id) => {
    console.log(user_id)
    return db
        .promise()
        .query(
        "SELECT * FROM userAlert WHERE user_id = ?",
        [user_id]
        )
        .then(([users]) => users);
  }



 const createUserAlert = (user_id, job_id, city) => {
    return db
        .promise()
    .query(
        "INSERT INTO userAlert (user_id, job_id, city) VALUES (?, ?, ?)",
        [user_id, job_id, city]) 
        .then(([users]) => users);
}

  deleteUserAlert = (userAlert_id) => {
    return db
        .promise()
    .query( 
        "DELETE FROM userAlert WHERE userAlert_id = ?",[userAlert_id])
        .then(([users]) => users);
}
  modifyUserAlert = (user_id, job_id, city) => {
    return db
        .promise()
    .query(
        "UPDATE userAlert SET user_id = ?, job_id = ?, city = ? WHERE userAlert_id = ?",[user_id, job_id, city, id])
        .then(([users]) => users);
}

module.exports = {
findAllUserId, createUserAlert, deleteUserAlert, modifyUserAlert, findUserAlert
  };
  