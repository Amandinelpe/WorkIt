import { React, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import BoxCandidate from "../components/BoxCandidate";
import HelloButton from "../components/HelloButton";
import Footer from "../components/Footer";
import "../styles/DashboardCandidate.css";
import Dashboard from "../components/Dashboard";
import MyProfile from "../components/MyProfile";
import MessagerieCandidat from "../components/MessagerieCandidat";

const DashboardCandidate = () => {
  const [content, setContent] = useState("dashboard");

  const handleContent = (ctn) => {
    setContent(ctn);
  };

  const renderSwitch = () => {
    switch (content) {
      case "my-profile":
        return <MyProfile />;
      case "dashboard":
        return <Dashboard />;
      case "messagerie":
        return <MessagerieCandidat />;
      default:
        return <Dashboard />;
    }
  };

  console.log(content);

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
        <BoxCandidate handleContent={handleContent} />
      </div>
      {renderSwitch()}
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default DashboardCandidate;
