import React from "react";
import { motion } from "framer-motion";
import Inscription from "../components/Inscription";
import BannierePartenaire from "../components/BannierePartenaire";
import "../styles/CreateProfile.css";

const CreateProfile = () => {
  return (
    <motion.div
      className="page_createprofile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Inscription />
      <BannierePartenaire />
    </motion.div>
  );
};

export default CreateProfile;
