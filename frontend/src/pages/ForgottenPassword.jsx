import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/ForgottenPassword.css";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const tempoSendEmail = (emailUser) => {
    axios
      .put("http://localhost:5000/api/user/resetPassword", {
        email: emailUser,
      })
      .then((response) => {
        console.warn(response.data);
        setMessage({ ...response.data });
        setTimeout(() => {
          window.location.replace(response.data.preview);
        }, 2000);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <motion.div
      className="forgotten_password_block"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            type="button"
            onClick={() => tempoSendEmail(email)}
          >
            ENVOYER
          </button>
        </div>
        {message && <h1>{message.message}</h1>}
      </form>
    </motion.div>
  );
};

export default ForgottenPassword;
