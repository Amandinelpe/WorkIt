// eslint-disable-next-line no-unused-vars
import "../styles/ConnexionCandidat.css";
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authContext } from "../context/AuthContext";
import BannierePartenaire from "../components/BannierePartenaire";

const Connexion = ({ user }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, auth } = useContext(authContext);

  useEffect(() => {
    if (auth) {
      navigate("/Main");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(
          `http://localhost:5002/api/${user}/login`,
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
          }
        })
        .catch((err) => alert(err.resonse));
    } else {
      // alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div>
      <div className="connexion-candidat">
        <div className="title">
          <h1>Connecte toi</h1>
          <h3>à ton espace personnel</h3>
        </div>
        <form
          name="connexion"
          method="post"
          className="connexion-form"
          onSubmit={handleSubmit}
        >
          <div className="connexion-input">
            <label htmlFor="Email">Adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@blabla.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="Mot de passe">Mot de passe</label>
            <input
              type="password"
              name="Mot de passe"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

Connexion.propTypes = {
  user: PropTypes.string.isRequired,
};
