import React, { useState, useEffect } from "react";
import notificationLogo from "../assets/img/notifications.png";
import "../styles/Notification.css";

const Notification = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications([...notifications, data]);
    });
  }, [socket]);

  return (
    <div className="notification">
      <img src={notificationLogo} alt="notification" />
      {notifications.length > 0 && (
        <span className="notification-count">{notifications.length}</span>
      )}
    </div>
  );
};

export default Notification;
