import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import "../styles/MyProfile.css";
import dataMyProfile from "../utils/dataMyProfile";
import { GetAllJobs } from "../utils/getAllJobs";
import { GetAllExperiences } from "../utils/getExperiences";
import { GetUser } from "../utils/getUsers";
import { UpdateUser } from "../utils/updateUser";

const MyProfile = () => {
  const [jobs, setJobs] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();
  const [disableSaveButton, setDisableSaveButton] = useState(true);

  const handleChange = (e, customValue) => {
    setMessage(null);
    setDisableSaveButton(false);
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: customValue ?? value,
    }));
  };

  useEffect(() => {
    const getDatas = async () => {
      setJobs(await GetAllJobs());
      setExperiences(await GetAllExperiences());

      const data = window.localStorage.getItem("user");
      if (data) {
        const userParse = JSON.parse(data);
        setUser(await GetUser(userParse.id));
      }
    };
    getDatas();
  }, []);

  const updateUser = async () => {
    try {
      await UpdateUser(user);
      setMessage("Mise à jour effectué avec succès");
      setDisableSaveButton(true);
    } catch (err) {
      setMessage(err.message);
    }
  };

  console.log(user, "hello");
  return (
    <div className="my-profile">
      <div className="flex flex-fd-column flex-ai-center flex-jc-center">
        <div className="box box_candidate">
          <div className="box_candidate_title">
            <h1>Mon Profil</h1>
          </div>
          <div className="box_candidate_body">
            <div>
              <h3>Mes informations personnelles</h3>
              <div className="informations-personnelles flex flex-fd-row flex-ai-flex-start flex-jc-space-between">
                <div>
                  <div className="gender"></div>
                  <div className="flex flex-fd-row flex-jc-space-between">
                    <div className="flex flex-fd-column flex-gap-3vh">
                      <label>
                        Prénom
                        <input
                          type="text"
                          name="firstname"
                          className="small-input"
                          value={user.firstname}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Email
                        <input
                          type="text"
                          name="email"
                          className="small-input"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Localisation
                        <input
                          type="text"
                          name="city"
                          className="small-input"
                          value={user.city}
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                    <div className="flex flex-fd-column flex-gap-7vh">
                      <label>
                        Nom
                        <input
                          type="text"
                          name="lastname"
                          className="small-input"
                          value={user.lastname}
                          onChange={handleChange}
                        />
                      </label>
                      <div>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="inputfile"
                        />
                        <label htmlFor="file">Je dépose mon CV</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="picture_profil flex flex-fd-column flex-ai-center flex-jc-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt="utilisateur"
                  />
                  <p>Photo de profil</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Ma situation actuelle </h3>
              <div className="flex flex-fd-row flex-ai-flex-start flex-jc-space-between">
                <div className="flex flex-fd-column flex-gap-3vh">
                  <label>
                    Poste actuel ou dernier poste occupé
                    <select
                      value={user.job_id}
                      name="job_id"
                      onChange={handleChange}
                    >
                      {jobs.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.job_title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div>
                    <p className="label">Disponibilité</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.disponibility.map((item) => (
                        <RadioButton
                          key={item.id}
                          labelName={item.labelName}
                          inputName="disponibilite"
                          inputValue={item.inputValue}
                        />
                      ))}
                    </div>
                  </div>
                  <label>
                    Niveau de qualification
                    <input
                      type="text"
                      name="niveau-qualification"
                      className="small-input"
                    />
                  </label>
                  <label>
                    Mon site internet
                    <input
                      type="text"
                      name="website"
                      className="small-input"
                      value={user.website}
                      onChange={handleChange}
                    />
                  </label>
                  <div>
                    <p className="label">Reconnu travailleur handicapé</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.recognizedDisabledWorker.map(
                        (item) => (
                          <RadioButton
                            key={item.id}
                            labelName={item.labelName}
                            inputName="travailleur-handicape"
                            inputValue={item.inputValue}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-fd-column flex-gap-3vh">
                  <label>
                    Situation actuelle
                    <input
                      type="text"
                      name="situation-actuelle"
                      className="large-input"
                    />
                  </label>
                  <div>
                    <p className="label">Niveau d'expérience</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {experiences.map((item) => {
                        return (
                          <RadioButton
                            key={item.id}
                            labelName={item.experience}
                            inputName="experience_id"
                            inputValue={item.id}
                            checked={item.experience_id === item.id}
                            onChange={handleChange}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <label>
                    Salaire (annuel brut)
                    <input
                      type="number"
                      name="salary"
                      className="small-input"
                      value={user.salary}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Mon GitHub
                    <input
                      type="text"
                      name="github"
                      className="small-input"
                      value={user.github}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="actions">
              <button
                type="submit"
                className="btn-enregistrer"
                onClick={updateUser}
                disabled={disableSaveButton}
              >
                Enregistrer
              </button>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
