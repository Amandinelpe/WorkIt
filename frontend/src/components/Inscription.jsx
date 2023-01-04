import React, { useEffect, useState } from "react";
import api from "../services/api";

const Inscription = () => {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState([]);

  const updateProfile = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const getJob = () => {
    api.get("api/job").then((response) => setJobs(response.data));
  };

  useEffect(() => getJob, []);

  console.warn(jobs, "jobs");
  console.warn(typeof jobs, "typeof(jobs)");

  return (
    <div>
      <form>
        Je m'appelle{" "}
        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={profile.firstName}
          onChange={updateProfile}
        />{" "}
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          value={profile.lastName}
          onChange={updateProfile}
        />{" "}
        et je cherche un poste{" "}
      </form>
      <div>
        de{" "}
        <input
          type="text"
          name="job"
          placeholder="Développeur"
          value={profile.job}
          onChange={updateProfile}
        />{" "}
        à{" "}
        <input
          type="text"
          name="city"
          placeholder="Bordeaux"
          value={profile.city}
          onChange={updateProfile}
        />{" "}
      </div>
      <div>
        Vous pouvez me joindre à l'adresse suivante:{" "}
        <input
          type="text"
          name="email"
          placeholder="Mon adresse email"
          value={profile.email}
          onChange={updateProfile}
        />
      </div>
      <form>
        Je choisis mon mot de passe :{" "}
        <input
          type="text"
          name="password"
          placeholder="Mot de passe"
          value={profile.password}
          onChange={updateProfile}
        />
      </form>
    </div>
  );
};

export default Inscription;
