import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../styles/ChatFooter.css";

const ChatFooter = ({ socket, setTypingMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      socketID: socket.id,
      message,
    });
    setMessage("");
  };

  let timeOut;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      clearTimeout(timeOut);
      handleSendMessage(e);
      socket.emit("typing", { typing: false });
    } else {
      socket.emit("typing", { typing: true });
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        socket.emit("typing", { typing: false });
      }, 4000);
    }
  };

  useEffect(() => {
    socket.on("isTyping", (data) => {
      setTypingMessage(data);
    });
  }, [socket]);

  return (
    <div className="chat__footer">
      <input
        type="text"
        placeholder="Ecrire un message"
        className="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button type="button" className="sendBtn" onClick={handleSendMessage}>
        Envoyer
      </button>
    </div>
  );
};
ChatFooter.propTypes = {
  socket: PropTypes.shape({
    on: PropTypes.func,
    emit: PropTypes.func,
    id: PropTypes.string,
  }).isRequired,
  setTypingMessage: PropTypes.func.isRequired,
};
export default ChatFooter;
