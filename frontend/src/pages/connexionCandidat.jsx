import React from "react";
import "../styles/ConnexionCandidat.css";
import workit from "../assets/img/logo.png";

const ConnexionCandidat = () => {
  return (
    <>
      <div className="login_logo">
        <img src={workit} alt="logo" />
      </div>
      <div className="title">
        <h1>Connecte toi</h1>
        <h3>à ton espace personnel</h3>
      </div>
      <div className="contact">
        <form name="contact" method="post" className="contact-form">
          <label htmlFor="Email">Adresse email :</label>
          <input type="email" name="email" />
          <label htmlFor="Mot de passe">Mot de passe : </label>
          <input type="text" name="Mot de passe" />
          <a href="/connexionCandidat">Mot de passe oublié ?</a>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ConnexionCandidat;
