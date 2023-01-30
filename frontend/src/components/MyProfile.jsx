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
      if (user.fileName) {
        await UpdateUserFile(user);
      }
      setMessage("Mise à jour effectué avec succès");
    } catch (err) {
      setMessage(err.message);
    }
  };

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
                  <div className="gender" />
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
                          onChange={handleCV}
                        />
                        <label htmlFor="file">Je dépose mon CV</label>
                        <div className="fileName">
                          {user.fileName && <p>{user.fileName}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="picture_profil flex flex-fd-column flex-ai-center flex-jc-center">
                  <img src={user.photo} alt="utilisateur" />
                </div> */}
                {/* <ProfilePictucre user={user} setUser={setUser} /> */}
              </div>
            </div>
            <div>
              <h3>Ma situation actuelle </h3>
              <div className="flex flex-fd-row flex-ai-flex-start flex-jc-space-between">
                <div className="flex flex-fd-column flex-gap-3vh">
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
                    Niveau d'étude
                    <input
                      type="text"
                      name="diploma"
                      className="small-input"
                      value={user.diploma}
                      onChange={handleChange}
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
                      name="actual_job"
                      className="large-input"
                      value={user.actual_job}
                      onChange={handleChange}
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
