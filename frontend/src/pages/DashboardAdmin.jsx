import { React, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import BoxAdmin from "../components/BoxAdmin";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import Candidats from "../components/Candidats";
import ListeConsultants from "../components/ListeConsultants";
import EnterpriseConsultant from "../components/EnterpriseConsultant";
import "../styles/BoxAdmin.css";

const DashboardAdmin = () => {
  const [content, setContent] = useState("dashboard");

  const handleContent = (link) => {
    setContent(link);
  };

  const renderSwitch = () => {
    switch (content) {
      case "entreprise":
        return <EnterpriseConsultant />;
      case "candidat":
        return <Candidats />;
      case "consultant":
        return <ListeConsultants />;
      case "medias":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <NavBar />
        <div className="mydashboardadmin_body">
          <BoxAdmin handleContent={handleContent} />
        </div>
        {renderSwitch()}
        <div>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardAdmin;
