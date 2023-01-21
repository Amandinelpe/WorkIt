import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../styles/ChatFooter.css";

const ChatFooter = ({ socket, setTypingStatus }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      socketID: socket.id,
      text: inputMessage,
      name: socket.id,
    });
    setInputMessage("");
  };

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  let timeOut;

  const handleKeyDown = (e) => {
    if (e.key === "Entrer") {
      clearTimeout(timeOut);
      handleSendMessage(e);
    } else {
      socket.emit("typing", { typing: true });
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        socket.emit("typing", { typing: false });
      }, 4000);
    }
  };

  useEffect(() => {
    socket.on("isTyping", (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <form className="chat__footer">
      <input
        type="text"
        placeholder="Ecrire un message"
        className="message"
        value={inputMessage || ""}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button type="button" className="sendBtn" onClick={handleSendMessage}>
        Envoyer
      </button>
    </form>
  );
};

ChatFooter.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    id: PropTypes.string,
  }).isRequired,
  setTypingStatus: PropTypes.objectOf.isRequired,
};

export default ChatFooter;
