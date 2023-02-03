import { React, useState, useEffect, useContext } from "react";
import { authContext } from "../context/AuthContext";
import "../styles/JobAlert.css";
import { GetMyUserAlerts } from "../apis/userAlertApi";
import notificationAlert from "../assets/img/notification-alert.png";
import modifyButton from "../assets/img/modify-button.png";
import deleteButton from "../assets/img/delete-button.png";

const JobAlert = () => {
  const [isAlert, setIsAlert] = useState(false);
  const { auth } = useContext(authContext);

  const [alerts, setAlerts] = useState([]);

  const getAllMyAlerts = async () => {
    auth.data &&
      (await GetMyUserAlerts(auth.data.id).then((res) => {
        setAlerts(res.data);
      }));
  };

  useEffect(() => {
    getAllMyAlerts();
  }, []);

  return (
    <div className="bloc_alert">
      {alerts.map((alert) => (
        <div className="alert_block" key={alert.id}>
          <img
            src={notificationAlert}
            onClick={() => setIsAlert(!isAlert)}
            onKeyDown=""
            role="presentation"
            alt="logo notification alert"
            className="alert_logo"
          />
          <div className="alert_body">
            <p id="job_title">
              {alert.contract_type}-{alert.job_id}
            </p>
            <p id="job_location">{alert.firm_city}</p>
            <div className="offer_block_options">
              <div className="modify_option">
                <img src={modifyButton} alt="bouton modifier" />
                <button type="submit">Modifier</button>
              </div>
              <div className="delete_option">
                <img src={deleteButton} alt="bouton supprimer" />
                <button type="submit">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobAlert;
