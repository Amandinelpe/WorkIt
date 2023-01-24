import { React, useState } from "react";
import socketIO from "socket.io-client";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import BoxCandidate from "../components/BoxCandidate";
import HelloButton from "../components/HelloButton";
import Footer from "../components/Footer";
import "../styles/DashboardCandidate.css";
import Dashboard from "../components/Dashboard";
import MyProfile from "../components/MyProfile";
import ChatBody from "../components/ChatBody";

const DashboardCandidate = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);
  const [content, setContent] = useState("dashboard");

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
        <BoxCandidate setContent={setContent} />
      </div>
      <Dashboard show={content === "dashboard"} />
      <MyProfile show={content === "my-profile"} />
      <ChatBody socket={socket} show={content === "messagerie"} />
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default DashboardCandidate;
