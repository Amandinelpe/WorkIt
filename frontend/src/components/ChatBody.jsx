import PropTypes from "prop-types";
import React from "react";
import "../styles/ChatBody.css";

const ChatBody = ({ socket, typingStatus, chatMessage, lastMessageRef }) => {
  return (
    <div className="chat_box_container">
      <div className="message__container">
        {chatMessage.map((message) =>
          message.socketID === socket.id ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">Vous</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats">
              <p>{message.userName}Ton consultant</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className={lastMessageRef}>
        <p>{typingStatus}</p>
      </div>
    </div>
  );
};

ChatBody.propTypes = {
  socket: PropTypes.objectOf.isRequired,
  typingStatus: PropTypes.shape.isRequired,
  chatMessage: PropTypes.arrayOf.isRequired,
  lastMessageRef: PropTypes.objectOf.isRequired,
};

export default ChatBody;
