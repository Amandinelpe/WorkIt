import React from "react";
import { Link } from "react-router-dom";
// import { HiOutlineUserCircle } from "react-icons/Hi";
import { navBarUser } from "../utils/navBarLinks";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        {navBarUser.map((section) => (
          <Link
            key={section.id}
            to={section.link}
            className="items"
            id={section.id}
          >
            {section.name}
          </Link>
        ))}
        {/* <HiOutlineUserCircle className="my_profile_icon" /> */}
      </ul>
    </div>
  );
};

export default NavBar;
