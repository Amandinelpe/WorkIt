import socketIO from "socket.io-client";
import React from "react";
import ChatBodyConsultant from "./ChatBodyConsultant";
import ChatBarConsultant from "./ChatBarConsultant";
import "../styles/Chat.css";

const ChatConsultant = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);
  return (
    <div className="my_inbox_box_body">
      <div className="my_inbox_body">
        <div className="my_inbox_titleblock">
          <h2 className="my_inbox_title">Ma messagerie</h2>
        </div>
        <div className="chatBox">
          <ChatBarConsultant socket={socket} />
          <div className="chatMain">
            <ChatBodyConsultant socket={socket} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatConsultant;
