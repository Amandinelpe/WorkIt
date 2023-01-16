import React from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import Conversation from "../components/Conversation";
import ChatOnline from "../components/ChatOnline";
import Message from "../components/Message";
import Footer from "../components/Footer";
import "../styles/Messenger.css";

const Inbox = () => {
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
          <div className="messenger">
            <div className="chatMenu">
              <div className="chatMenuWrapper">
                <input
                  placeholder="Rechercher un.e consultant.e"
                  className="chatMenuInput"
                />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>
            </div>
            <div className="chatBox">
              <div className="chatBoxWrapper">
                <div className="chatBoxTop" />
                <Message />
                <Message own />
                <Message />
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Envoyer un message"
                  />
                  <button type="submit" className="chatSubmitButton">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
            <div className="chatOnline">
              <div className="chatOnlineWrapper">
                <ChatOnline />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
