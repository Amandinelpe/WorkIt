import React from "react";
import "../styles/ForgottenPassword.css";

const ForgottenPassword = () => {
  return (
    <div className="forgotten_password_block">
      <h1 className="forgotten_password_title"> Mot de passe oublié ? </h1>
      <form className="forgotten_password_form">
        <h2>
          Saisis l'adresse électronique utilisée lors de ton inscription et nous
          te renverrons des instructions pour réinitialiser ton mot de passe.
        </h2>
        <div className="forgotten_password_input">
          <label htmlFor="Email">Adresse email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@blabla.com"
          />
        </div>
        <div>
          <button className="forgotten_password_send_button" type="submit">
            ENVOYER
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgottenPassword;
