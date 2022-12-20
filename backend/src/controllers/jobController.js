const jobModel = require("../models/jobModel");

const jobController = {
  getAllJobs: (_, res) => {
    jobModel
      .findAll()
      .then(([jobs]) => res.status(200).send(jobs))
      .catch((err) => console.error(err));
  },
  getJobById: (req, res) => {
    const { id } = req.params;
    jobModel
      .findOne(id)
      .then(([job]) => res.status(200).send(job))
      .catch((err) => console.error(err).send("Communication failed"));
  },
};

module.exports = jobController;
