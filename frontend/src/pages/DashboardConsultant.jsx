import { React, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxConsultants from "../components/BoxConsultants";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import Candidature from "../components/Candidature";
import EnterpriseConsultant from "../components/EnterpriseConsultant";

const DashboardConsultant = () => {
  const [content, setContent] = useState("annonces");

  const handleContent = (link) => {
    setContent(link);
  };

  const renderSwitch = () => {
    switch (content) {
      case "entreprises":
        return <EnterpriseConsultant />;
      case "dashboard":
        return <Dashboard />;
      case "candidatures":
        return <Candidature />;
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
      <NavBar />
      <HelloButton />
      <div className="mydashboard_body">
        <BoxConsultants handleContent={handleContent} />
      </div>
      <div className="mydashboard_render">{renderSwitch()}</div>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default DashboardConsultant;
