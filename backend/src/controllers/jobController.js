const jobModel = require("../models/jobModel");

const jobController = {
  getAllJobs: (_, res) => {
    jobModel
      .findAll()
      .then(([jobs]) => res.status(200).send(jobs))
      .catch((err) => res.status(500).send(err));
  },
  getJobById: (req, res) => {
    const { id } = req.params;
    jobModel
      .findOne(id)
      .then(([job]) => res.status(200).send(job))
      .catch((err) => res.status(500).send(err));
  },
  getAllTitles: (_, res) => {
    jobModel
      .findAllTitles()
      .then((jobs) => res.status(200).send(jobs))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = jobController;
