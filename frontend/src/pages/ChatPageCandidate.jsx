import socketIO from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import Footer from "../components/Footer";
import "../styles/ChatPageCandidate.css";

const ChatPageCandidate = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);

  const [chatMessage, setChatMessage] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  useEffect(() => {
    socket.on("newMessage", (messages) => {
      setChatMessage([...chatMessage, messages]);
    });
  }, [chatMessage]);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessage]);

  return (
    <div className="inbox">
      <NavBar />
      <HelloButton />
      <div className="inbox_body">
        <BoxCandidate />
      </div>
      <div className="my_inbox_box_body">
        <div className="my_inbox_body">
          <div className="my_inbox_titleblock">
            <h2 className="my_inbox_title">Ma messagerie</h2>
          </div>
          <div className="chatBox">
            <ChatBody
              socket={socket}
              typingStatus={typingStatus}
              // chatMessage={chatMessage}
              // lastMessageRef={lastMessageRef}
            />
            <ChatFooter socket={socket} setTypingStatus={setTypingStatus} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ChatPageCandidate;
