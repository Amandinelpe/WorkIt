import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ChatFooter from "./ChatFooter";
import "../styles/ChatBody.css";

const ChatBody = ({ socket }) => {
  // const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([]);

  // const handleOpenChat = () => {
  //   navigate("/Messagerie");
  //   window.location.reload();
  // };

  useEffect(() => {
    socket.on("newMessage", (messages) => {
      setChatMessages([...chatMessages, messages]);
    });
  }, [chatMessages]);

  return (
    <div className="chat_box_container">
      <div className="message__container">
        {chatMessages.map((message) =>
          message.socketID === socket.id ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">Vous</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats">
              <p>{message.userName}Votre interlocuteur</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="chat_footer_body">
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

ChatBody.propTypes = {
  socket: PropTypes.shape({
    id: PropTypes.string,
    on: PropTypes.func,
  }).isRequired,
};

export default ChatBody;