import { React, useEffect, useState } from "react";
import { getAllJobs } from "../utils/getAllJobs";
import { postUser } from "../utils/postUser";
import "../styles/Inscription.css";

const Inscription = () => {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState([]);

  const updateProfile = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const getJobs = async () => {
    setJobs(await getAllJobs());
  };
  useEffect(() => {
    getJobs();
  }, []);

  const postOneUser = async () => {
    setProfile(await postUser());
  };

  console.warn(jobs, "jobs");
  console.warn(profile, "profile");

  return (
    <div className="inscription_bloc">
      <p>
        Bonjour futur.e Worker! Bienvenue chez WorkIT! <br /> Faisons
        connaissance et trouvons ensemble l'entreprise qui te correspond le
        mieux.{" "}
      </p>
      <form onSubmit={postOneUser}>
        Je m'appelle{" "}
        <input
          className="form_input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={profile.firstName}
          onChange={updateProfile}
        />{" "}
        <input
          className="form_input"
          type="text"
          name="lastname"
          placeholder="Nom"
          value={profile.lastName}
          onChange={updateProfile}
        />{" "}
        et je cherche un poste de{" "}
        <input
          className="form_input"
          type="text"
          name="job_id"
          placeholder="Développeur"
          value={profile.job}
          onChange={updateProfile}
        />{" "}
        à{" "}
        <input
          className="form_input"
          type="text"
          name="city"
          placeholder="Bordeaux"
          value={profile.city}
          onChange={updateProfile}
        />{" "}
        en CDI, car chez WorkIT nous ne proposons que des postes avec ce type de
        contrat directement chez des startup / éditeur de logiciel / DSI / etc.
        Pas en ESN. Ainsi, vous serez salarié de l’entreprise accompagnée et non
        de WorkIT.
        <div>
          Vous pouvez me joindre à l'adresse suivante:{" "}
          <input
            className="form_input"
            type="email"
            name="email"
            placeholder="Mon adresse email"
            value={profile.email}
            onChange={updateProfile}
          />
        </div>
        Je choisis mon mot de passe :{" "}
        <input
          className="form_input"
          type="text"
          name="password"
          placeholder="Mot de passe"
          value={profile.password}
          onChange={updateProfile}
        />
        <div className="button_section">
          <button className="inscription_button" type="submit">
            {" "}
            JE M'INSCRIS
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inscription;
