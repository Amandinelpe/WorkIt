import React from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import Conversation from "../components/Conversation";
import Footer from "../components/Footer";
import "../styles/Inbox.css";

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
          <div className="my_inbox">
            <div className="chatMenu">
              <div className="chatMenuWrapper">
                <input
                  placeholder="Rechercher un.e consultant.e"
                  className="chatMenuInput"
                />
                <Conversation />
              </div>
            </div>
            <div className="chatBox">
              <div className="chatBoxWrapper">Box</div>
            </div>
            <div className="chatOnline">
              <div className="chatOnlineWrapper">Online</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Inbox;
