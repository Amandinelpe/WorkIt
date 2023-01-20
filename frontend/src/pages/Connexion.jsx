import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { authContext } from "../context/AuthContext";
import BannierePartenaire from "../components/BannierePartenaire";
import "../styles/Connexion.css";

const Connexion = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, auth } = useContext(authContext);
  console.log(user,)
  useEffect(() => {
    if (auth.data) {
      navigate("/Main");
    }
  }, []);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(
        `${apiUrl}${user}/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-undef
          login(res.data);
        }
      })
      .catch((err) => setError(err.response.data.message));
    event.preventDefault();
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
          className={`connexion-form ${user}`}
          onSubmit={handleSubmit}
        >
          <div className="connexion-input">
            <label htmlFor="Email">Adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@blabla.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="connexion-button">
            <p className="error-message">{error}</p>
            <button className="uppercase" type="submit">
              Je me connecte
            </button>
          </div>
          <div className="small_link">
            <h4>
              <Link to="/ForgottenPassword">Mot de passe oublié ?</Link>
            </h4>

            <h4>
              <Link to="/CreateProfile">Créer un profil ici </Link>
            </h4>
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
