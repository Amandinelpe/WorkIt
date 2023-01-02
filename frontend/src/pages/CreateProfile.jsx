import React from "react";
import Trust from "../components/Trust";
import Inscription from "../components/Inscription";
import "../styles/CreateProfile.css";

const CreateProfile = () => {
  return (
    <div className="Profile">
      <Inscription />
      <Trust />
    </div>
  );
};

export default CreateProfile;
