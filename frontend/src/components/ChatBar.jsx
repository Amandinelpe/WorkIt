import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
// import ChatBodyConsultant from "./ChatBodyConsultant";

const ChatBar = ({ socket }) => {
  const [activeRoom, setActiveRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isOneToOne] = useState(false);
  useEffect(() => {
    socket.emit("get rooms");
    socket.on("rooms", setRooms);
  }, [socket]);

  const handleRoomClick = (room) => {
    setActiveRoom(room);
    socket.emit("join room", room);
  };

  return (
    <div className="chatBar">
      <div className="rooms">
        {!isOneToOne &&
          rooms.map((room) => (
            <div
              key={room}
              role="button"
              aria-label={`Join room ${room}`}
              tabIndex={0}
              className={`room ${room === activeRoom ? "active" : ""}`}
              onClick={() => handleRoomClick(room)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleRoomClick(room);
                }
              }}
            >
              {room}
            </div>
          ))}
      </div>
    </div>
  );
};

ChatBar.propTypes = {
  socket: PropTypes.shape({
    id: PropTypes.string,
    on: PropTypes.func,
    emit: PropTypes.func,
  }).isRequired,
};

export default ChatBar;
