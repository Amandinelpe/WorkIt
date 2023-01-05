import React from "react";
import "../styles/ConnexionCandidat.css";
import BannierePartenaire from "../components/BannierePartenaire";

const ConnexionCandidat = () => {
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
            <input type="email" name="email" />
          </div>
          <div className="connexion-input">
            <label htmlFor="Mot de passe">Mot de passe</label>
            <input type="text" name="Mot de passe" />
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

export default ConnexionCandidat;
