import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllJobs } from "../apis/jobApi";
import { CreateUser } from "../apis/user";
import dislike from "../assets/img/dislike.png";
import like from "../assets/img/like.png";
import "../styles/Inscription.css";

const Inscription = () => {
  const [profile, setProfile] = useState({ role_id: 1 });
  const [confirmPassword, setConfirmPassword] = useState();
  const [match, setMatch] = useState(false);
  const [jobs, setJobs] = useState([]);

  const updateProfile = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const comparePasswords = (event) => {
    setConfirmPassword(event.target.value);
  };

  const postProfile = (event) => {
    event.preventDefault();
    CreateUser(profile).then((res) => console.warn(res.data));
  };

  useEffect(() => setJobs(GetAllJobs()), []);
  console.warn(jobs, "jobs");

  useEffect(() => {
    if (profile.password === confirmPassword) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [confirmPassword]);

  return (
    <div className="inscription_bloc">
      <p>
        Bonjour futur.e Worker! Bienvenue chez WorkIT! <br /> Faisons
        connaissance et trouvons ensemble l'entreprise qui te correspond le
        mieux.{" "}
      </p>
      <form onSubmit={postProfile}>
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
          type="number"
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
          <div>
            Je choisis mon mot de passe :{" "}
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={profile.password}
              onChange={updateProfile}
            />
            <br />
          </div>
          Je confirme mon mot de passe:{" "}
          <input
            className="form_input"
            type="password"
            name="password"
            placeholder="Confirmation mot de passe"
            value={confirmPassword}
            onChange={comparePasswords}
          />
          {confirmPassword && (
            <img
              alt="dislike"
              src={match === false ? dislike : like}
              width="15vw"
            />
          )}
        </div>
        <div className="button_section">
          <button className="inscription_button" type="submit">
            {" "}
            JE M'INSCRIS
          </button>
          <p>
            {" "}
            <Link to="/ConnexionCandidat">Déjà un compte ? Log in ici </Link>
          </p>{" "}
        </div>
      </form>
    </div>
  );
};

export default Inscription;
