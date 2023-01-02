const experienceModel = require("../models/experienceModel");

const experienceController = {
  getAllExperiences: (_, res) => {
    experienceModel
      .findAll()
      .then(([experiences]) => res.status(200).send(experiences))
      .catch((err) => res.status(500).send(err));
  },
  getExperienceById: (req, res) => {
    const { id } = req.params;
    experienceModel
      .findOne(id)
      .then(([experience]) => res.status(200).send(experience))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = experienceController;
