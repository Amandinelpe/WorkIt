import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Inscription.css";

const Inscription = () => {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState([]);

  const updateProfile = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const getJob = () => {
    api.get("job").then((response) => setJobs(response.data));
  };

  useEffect(() => getJob, []);

  console.warn(jobs, "jobs");
  console.warn(profile, "profile");

  return (
    <div className="inscription_bloc">
      <form>
        Bonjour futur.e Worker. Bienvenue chez WorkIT!
        <br />
        <br />
        Faisons connaissance et trouvons ensemble l'entreprise qui te correspond
        le mieux.
        <br />
        <br />
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
        et je cherche un poste de{" "}
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
      </form>
      <br />
      <div>
        Vous pouvez me joindre à l'adresse suivante:{" "}
        <input
          type="email"
          name="email"
          placeholder="Mon adresse email"
          value={profile.email}
          onChange={updateProfile}
        />
      </div>
      <br />
      <form>
        Je choisis mon mot de passe :{" "}
        <input
          type="text"
          name="password"
          placeholder="Mot de passe"
          value={profile.password}
          onChange={updateProfile}
        />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Inscription;
