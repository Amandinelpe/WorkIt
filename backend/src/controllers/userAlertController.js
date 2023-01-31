const userAlertModel = require("../models/userAlertModel");

const userAlertController = {
 getAllUserId(req, res, next) {
    const job_id = req.query.job_id;
    const city = req.query.city; 

    userAlertModel
    .findAllUserId(job_id, city)
    .then((users) => res.status(200).send(users))
    .catch((err) => next(err));
 },
}





module.exports = userAlertController