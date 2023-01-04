import React from "react";
import { Link } from "react-router-dom";
// import { HiOutlineUserCircle } from "react-icons/Hi";
import { navBarUser } from "../utils/navBarLinks";
import LOGO from "../assets/img/logo.png";
import "../styles/NavBar.css";

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
        {/* <HiOutlineUserCircle className="my_profile_icon" /> */}
      </ul>
    </div>
  );
};

export default NavBar;
