import React, { useState } from "react";
import "../styles/ConnexionCandidat.css";
import { useParams } from "react-router-dom";
import BannierePartenaire from "../components/BannierePartenaire";

const Connexion = () => {
  // eslint-disable-next-line no-unused-vars
  const params = useParams();
  const [login, setLogin] = useState({});

  const updateLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  /*  Va bientôt servir !! */
  return (
    <div>
      <div className="connexion-candidat">
        <div className="title">
          <h1>Connecte toi</h1>
          <h3>à ton espace personnel</h3>
        </div>
        <form name="connexion" method="post" className="connexion-form">
          <div className="connexion-input">
            <label htmlFor="Email">Adresse email</label>
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={updateLogin}
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="Mot de passe">Mot de passe</label>
            <input
              type="text"
              name="password"
              value={login.password}
              onChange={updateLogin}
            />
            <div className="forget-password">
              <a href="/connexionCandidat">Mot de passe oublié ?</a>
            </div>
          </div>
          <div className="connexion-button">
            <button className="uppercase" type="submit">
              Je me connecte
            </button>
          </div>
        </form>
        <div>
          <BannierePartenaire />
        </div>
      </div>
    </div>
  );
};

export default Connexion;
