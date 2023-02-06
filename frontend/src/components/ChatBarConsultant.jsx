import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import consultantprofil from "../assets/img/consultantprofil.png";
import "../styles/Chat.css";

const ChatBarConsultant = ({ socket }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    socket.on("newUser", (newUser) => {
      setUser([...user, newUser]);
    });
  }, [user]);

  return (
    <div className="chat__sidebar">
      <div className="container__chat__bar">
        <h4 className="chat__header">Candidats actifs</h4>
        <div className="chat__users">
          {user.map((el) => (
            <div
              className="chat__user"
              key={el.id || el.lastname + el.firstname}
            >
              {el.role === "consultant" ? (
                <img src={consultantprofil} alt="consultant profile" />
              ) : (
                <img src={el.userprofil} alt="user profile" />
              )}
              <p className="p__chat__bar">
                {el.lastname}&#160;
                {el.firstname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ChatBarConsultant.propTypes = {
  socket: PropTypes.objectOf.isRequired,
  on: PropTypes.func.isRequired,
};

export default ChatBarConsultant;
