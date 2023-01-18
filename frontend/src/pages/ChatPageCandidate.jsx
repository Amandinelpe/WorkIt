import PropTypes from "prop-types";
import React from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import ChatBar from "../components/ChatBar";
// import ChatButtonToConnect from "../components/ChatButtonToConnect";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import Footer from "../components/Footer";
import "../styles/ChatPageCandidate.css";

const ChatPageCandidate = ({ socket }) => {
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
          {/* <div className="joinChat">
              <form className="home__container">
                <h2 className="home__header">Sign in to the chat room</h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="username__input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button
                  type="button"
                  className="home__cta"
                  onClick={handleSubmit}
                >
                  SIGN IN
                </button>
              </form>
            </div> */}
          <div className="chat_box_body">
            <ChatBar />
            <div className="chatBox">
              {/* <ChatButtonToConnect socket={socket} /> */}
              <ChatBody socket={socket} />
              <ChatFooter socket={socket} />
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

export default ChatPageCandidate;

ChatPageCandidate.propTypes = {
  socket: PropTypes.string.isRequired,
};
