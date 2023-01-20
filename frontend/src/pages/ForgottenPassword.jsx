import React, { useState } from "react";
import axios from "axios";
import "../styles/ForgottenPassword.css";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const resetMyPassword = () => {
    axios
      .post("http://localhost:5000/api/user/resetPassword", { email })
      .then((response) => setMessage({ ...response.data }))
      .catch((error) => console.warn(error));
  };

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
            placeholder="votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            className="forgotten_password_send_button"
            type="submit"
            onClick={resetMyPassword}
          >
            ENVOYER
          </button>
        </div>
        {message && (
          <>
            <h1>{message.message}</h1>
            <a href={message.preview}>Preview</a>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgottenPassword;
