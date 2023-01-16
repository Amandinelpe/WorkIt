import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { HiOutlineUserCircle } from "react-icons/Hi";
import { authContext } from "../context/AuthContext";
import {
  navBarUser,
  navBarAdmin,
  navBarConsultants,
  navBarSignIn,
} from "../utils/navBarLinks";
import "../styles/NavBar.css";

const NavBar = () => {
  const { user } = useContext(authContext);
  const [navBar, setNavBar] = useState([]);

  useEffect(() => {
    switch (user) {
      case "consultant":
        return setNavBar(navBarConsultants);
      case "user":
        return setNavBar(navBarUser);
      case "admin":
        return setNavBar(navBarAdmin);
      default:
        return setNavBar(navBarSignIn);
    }
  }, [user]);

  return (
    <div className="navbar">
      <ul>
        {navBar.map((section) => (
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
