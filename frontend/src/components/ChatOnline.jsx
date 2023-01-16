import React from "react";
import "../styles/ChatOnline.css";
import portrait from "../assets/img/olga-portrait.png";

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlinefriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={portrait} alt="pic-user" />
          <div className="chatOnlineBadge" />
        </div>
        <span className="chatOnlineName">Olga</span>
      </div>
    </div>
  );
};

export default ChatOnline;
