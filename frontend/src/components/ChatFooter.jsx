import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { userContext } from "../hooks/userContext";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const { userName } = useContext(userContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      userName,
      socketID: socket.id,
      message,
    });
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <div className="form">
        <input
          type="text"
          placeholder="Ecrire un message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" className="sendBtn" onClick={handleSendMessage}>
          Envoyer
        </button>
      </div>
    </div>
  );
};

ChatFooter.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
    id: PropTypes.string,
  }).isRequired,
};

export default ChatFooter;
