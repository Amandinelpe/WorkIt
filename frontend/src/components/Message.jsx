import React from "react";
import "../styles/Message.css";
import portrait from "../assets/img/olga-portrait.png";

const Message = (own) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={portrait} alt="portrait" />
        <p className="messageText">Bonjour ceci est un message</p>
      </div>
      <div className="messageBottom">Il y a 1h</div>
    </div>
  );
};

export default Message;
