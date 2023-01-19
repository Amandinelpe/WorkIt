// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BannierePartenaire from "../components/BannierePartenaire";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const { token, id } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/user/checkToken", { token })
      .then((response) => setEmail(response.data.user))
      .catch((error) => console.warn(error));
  }, [token]);

  // ici il faut faire un state pour afficher une erreur si le password expire (renvoyer user vrs login)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/user/changePassword/${id}`, {
        password,
      })
      .then((response) => {
        setMessage(response.data);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <div className="reset_password">
        <div className="reset_password_title">
          <h1>Change ton mot de passe</h1>
        </div>
        <form
          name="reset_password"
          method="post"
          className="reset_password_form"
          onSubmit={handleSubmit}
        >
          <div className="reset_password_input">
            <label htmlFor="Email">Ton adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@blabla.com"
              value={email}
              disabled
            />
          </div>
          <div className="reset_password_input">
            <label htmlFor="password">Ton nouveau mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="reset_password_button">
            <button className="uppercase" type="submit">
              Soumettre mot de passe
            </button>
          </div>
          {message && <h3 className="resetpassword_message">{message}</h3>}
        </form>
        <div>
          <BannierePartenaire />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
