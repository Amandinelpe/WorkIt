import React from "react";
import portrait from "../assets/img/olga-portrait.png";
import "../styles/Conversation.css";

const Conversation = () => {
  return (
    <div className="conversation">
      <div className="conversationImg" src={portrait} alt="photo-user" />
      <span className="conversationName">Amandine</span>
    </div>
  );
};

export default Conversation;
