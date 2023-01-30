import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import socketIO from "socket.io-client";
import HelloButton from "./HelloButton";
import { authContext } from "../context/AuthContext";
import {
  navBarUser,
  navBarAdmin,
  navBarConsultants,
  navBarSignIn,
} from "../utils/navBarLinks";
import "../styles/NavBar.css";
import Notification from "./Notification";

const NavBar = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);
  const { auth, logout } = useContext(authContext);
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
        {auth.data && (auth.data.role_id === 1 || auth.data.role_id === 2) && (
          <Notification socket={socket} />
        )}
        {auth.data && <HelloButton />}
      </ul>
    </div>
  );
};

export default NavBar;
