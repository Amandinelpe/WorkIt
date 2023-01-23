import PropTypes from "prop-types";
import socketIO from "socket.io-client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import ChatBody from "../components/ChatBody";
import Footer from "../components/Footer";
import "../styles/ChatPageCandidate.css";

const ChatPageCandidate = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <HelloButton />
      <div className="inbox_body">
        <BoxCandidate />
      </div>
      <div className="my_inbox_box_body">
        <div className="my_inbox_body">
          <div className="my_inbox_titleblock">
            <h2 className="my_inbox_title">Ma messagerie</h2>
          </div>
          <div className="chatBox">
            <ChatBody socket={socket} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};
export default ChatPageCandidate;
ChatPageCandidate.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  socket: PropTypes.objectOf.isRequired,
};
