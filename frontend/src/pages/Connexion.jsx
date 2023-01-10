import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ConnexionCandidat.css";
import BannierePartenaire from "../components/BannierePartenaire";

const Connexion = () => {
  // eslint-disable-next-line no-unused-vars
  const params = useParams();
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
            <input type="email" name="email" />
          </div>
          <div className="connexion-input">
            <label htmlFor="Mot de passe">Mot de passe</label>
            <input type="text" name="Mot de passe" />
            <div className="small_link">
              <h4>
                <Link to="/connexionCandidat">Mot de passe oublié ?</Link>
              </h4>

              <h4>
                <Link to="/forgottenPassword">Créer un profil ici </Link>
              </h4>
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
