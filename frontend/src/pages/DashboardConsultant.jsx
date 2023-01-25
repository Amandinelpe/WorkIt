import { React, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxConsultants from "../components/BoxConsultants";
import Chat from "../components/Chat";
import Footer from "../components/Footer";
import Candidature from "../components/Candidature";
import EnterpriseConsultant from "../components/EnterpriseConsultant";
import Candidats from "../components/Candidats";
import "../styles/DashboardConsultants.css";

const DashboardConsultant = () => {
  const [content, setContent] = useState("annonces");

  const handleContent = (ctn) => {
    setContent(ctn);
  };

  const renderSwitch = () => {
    switch (content) {
      case "entreprises":
        return <EnterpriseConsultant />;
      case "candidats":
        return <Candidats />;
      case "candidatures":
        return <Candidature />;
      case "messagerie":
        return <Chat />;
      default:
        return <EnterpriseConsultant />;
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
