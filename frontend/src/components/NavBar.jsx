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
  const { auth, logout } = useContext(authContext);
  const [navBar, setNavBar] = useState([]);

  const handleLogout = (id) => {
    if (id === 4) {
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
          <Link
            to={section.link}
            className="items"
            key={section.id}
            onClick={() => handleLogout(section.id)}
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
