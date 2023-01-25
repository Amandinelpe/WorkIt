import PropTypes from "prop-types";
import socketIO from "socket.io-client";
import React from "react";
import ChatBody from "./ChatBody";
import "../styles/Chat.css";

const Chat = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);
  return (
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
  );
};
export default Chat;
Chat.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  socket: PropTypes.objectOf.isRequired,
};
