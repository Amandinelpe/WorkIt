import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import "../styles/HelloButton.css";

const HelloButton = () => {
  const { auth } = useContext(authContext);

  return (
    <div className="hello_button">
      <h1>
        Bonjour {auth.data.firstname} {auth.data.lastname}
      </h1>
    </div>
  );
};

export default HelloButton;
