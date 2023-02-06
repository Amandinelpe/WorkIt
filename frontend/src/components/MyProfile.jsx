import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import "../styles/MyProfile.css";
import dataMyProfile from "../utils/dataMyProfile";
import { GetAllJobs } from "../utils/getAllJobs";
import { GetAllExperiences } from "../utils/getExperiences";
import { GetUser } from "../utils/getUsers";
import { UpdateUser, UpdateUserFile } from "../utils/updateUser";

const MyProfile = () => {
  const [jobs, setJobs] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (e, customValue) => {
    setMessage(null);
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: customValue ?? value,
    }));
  };

  const handleCV = (event) => {
    setUser({
      ...user,
      fileName: event.target.files[0].name,
      file: event.target.files[0],
    });
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
    const formData = new FormData();
    formData.append("upload", user.file);
    formData.append("fileName", user.fileName);
    try {
      await UpdateUser(user);
      if (user.file.name) {
        await UpdateUserFile(user);
      }
      setMessage("Mise à jour effectuée avec succès");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="my_profile">
      <div className="my_profile_box_candidate">
        <div className="my_profile_title">
          <h3>Mon Profil</h3>
        </div>
        <div className="my_profile_body">
          <div>
            <h4>Mes informations personnelles</h4>
            <div className="my_profile_informations_personnelles">
              <div className="my_profile_input_block">
                <label>Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  className="my_profile_small_input"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="my_profile_input_block">
                <label>Nom</label>
                <input
                  type="text"
                  name="lastname"
                  className="my_profile_small_input"
                  value={user.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="my_profile_input_block">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className="my_profile_small_input"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my_profile_input_block">
                <label>Localisation</label>
                <input
                  type="text"
                  name="city"
                  className="my_profile_small_input"
                  value={user.city}
                  onChange={handleChange}
                />
              </div>
              <div className="my_profile_drop_cv">
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="my_profile_inputfile"
                    accept="application/pdf"
                    onChange={handleCV}
                  />
                  <label htmlFor="file">Je dépose mon CV</label>
                </div>
              </div>
              <div className="my_profyle_fileName">
                {user.fileName && <p>{user.fileName}</p>}
              </div>
            </div>
          </div>
          <div>
            <h4>Ma situation actuelle </h4>
            <div className="">
              <div className="">
                <div>
                  <label>
                    Poste recherché
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
                </div>
                <div>
                  <p className="my_profile_label">Disponibilité</p>
                  <div className="">
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
                <div className="">
                  <label>Niveau d'études</label>
                  <input
                    type="text"
                    name="diploma"
                    className="my_profile_small_input"
                    value={user.diploma}
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label>Mon site internet</label>
                  <input
                    type="text"
                    name="website"
                    className="my_profile_small_input"
                    value={user.website}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="my_profile_label">
                    Reconnu travailleur handicapé
                  </p>
                  <div className="">
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
              <div className="">
                <div>
                  <label>Situation actuelle</label>
                  <input
                    type="text"
                    name="actual_job"
                    className="my_profile_large_input"
                    value={user.actual_job}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="label">Niveau d'expérience</p>
                  <div className="">
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
                <div>
                  <label>Salaire (annuel brut)</label>
                  <input
                    type="number"
                    name="salary"
                    className="my_profile_small_input"
                    value={user.salary}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Mon GitHub</label>
                  <input
                    type="text"
                    name="github"
                    className="my_profile_small_input"
                    value={user.github}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              type="submit"
              className="btn-enregistrer"
              onClick={updateUser}
            >
              Enregistrer
            </button>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
