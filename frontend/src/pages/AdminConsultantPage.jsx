import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const AdminConsultantPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <h2>prout</h2>
    </motion.div>
  );
};

export default AdminConsultantPage;
