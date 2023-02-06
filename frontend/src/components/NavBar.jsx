import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HelloButton from "./HelloButton";
import { authContext } from "../context/AuthContext";
import {
  navBarUser,
  navBarAdmin,
  navBarConsultants,
  navBarSignIn,
} from "../utils/navBarLinks";
import "../styles/NavBar.css";

const NavBar = () => {
  const { auth, logout, notification } = useContext(authContext);
  const [navBar, setNavBar] = useState([]);

  const handleLogout = (id) => {
    if (id === 3) {
      logout();
    }
  };

  useEffect(() => {
    if (auth.data) {
      switch (auth.data.role_id) {
        case 2:
          return setNavBar(navBarConsultants);
        case 1:
          return setNavBar(navBarUser);
        case 3:
          return setNavBar(navBarAdmin);
        default:
          return setNavBar(navBarSignIn);
      }
    } else {
      return setNavBar(navBarSignIn);
    }
  }, [auth]);

  return (
    <div className="navbar">
      <ul>
        {navBar.map((section) => (
          <NavLink
            to={section.link}
            className="items"
            key={section.id}
            onClick={() => handleLogout(section.id)}
          >
            {section.name}
          </NavLink>
        ))}
        {auth.data && <HelloButton />}
        {auth.data && auth.data.role_id === 1 ? (
          <div style={{ color: "red" }}>{notification}</div>
        ) : null}
      </ul>
    </div>
  );
};

export default NavBar;
