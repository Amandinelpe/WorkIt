import { React, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxConsultants from "../components/BoxConsultants";
import Footer from "../components/Footer";
import ListeCandidat from "../components/ListeCandidat";
import AnnoncesConsultant from "../components/AnnoncesConsultant";
import "../styles/DashboardConsultants.css";
import Candidature from "../components/Candidature";
import MessagerieCandidat from "../components/MessagerieConsultant";

const DashboardConsultant = () => {
  const [content, setContent] = useState("annonce");

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
        <BoxConsultants setContent={setContent} />
      </div>
      <AnnoncesConsultant show={content === "annonce"} />
      <ListeCandidat show={content === "mescandidats"} />
      <Candidature show={content === "candidature"} />
      <MessagerieCandidat show={content === "messagerie"} />
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default DashboardConsultant;
