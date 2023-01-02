import React from "react";
import { Link } from "react-router-dom";
import { navBarUser } from "../utils/navBarLinks";
import LOGO from "../assets/img/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/Main">
        <img className="logo" src={LOGO} alt="logo" />
      </Link>
      <ul>
        {navBarUser.map((section) => (
          <Link to={section.link} className="items" id={section.id}>
            {section.name}
          </Link>
        ))}
        <button className="Deconnexion" type="button">
          Déconnexion
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
