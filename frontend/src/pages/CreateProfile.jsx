import React from "react";
import Inscription from "../components/Inscription";
import BannierePartenaire from "./BannierePartenaire";
import "../styles/CreateProfile.css";

const CreateProfile = () => {
  return (
    <div className="page_createprofile">
      <Inscription />
      <BannierePartenaire />
    </div>
  );
};

export default CreateProfile;
