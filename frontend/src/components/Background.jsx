import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import BG from "../assets/img/workit02-fond.png";

const Background = () => {
  const { auth } = useContext(authContext);
  return (
    <div
      className={
        auth.data && auth.data.role_id === 2
          ? "site_background"
          : "site_background_normal"
      }
    >
      <img src={BG} alt="background" />
    </div>
  );
};

export default Background;
