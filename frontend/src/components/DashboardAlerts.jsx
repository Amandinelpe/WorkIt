import React from "react";
import JobAlert from "./JobAlert";

const DashboardAlerts = () => {
  return (
    <div>
      <div className="job_alerts_body">
        <div className="job_alerts">
          <div className="job_alerts_titleblock">
            <h2 className="job_alerts_title">Mes alertes</h2>
          </div>
          <div className="job_alerts_created">
            <div className="create_new_alert">
              <button type="button" className="create_new_alert_button">
                {" "}
                Créer une nouvelle alerte{" "}
              </button>
            </div>
            <div className="my_alerts_offers_body">
              <JobAlert />
            </div>
            <button type="button" className="job_alerts_button">
              {" "}
              Voir plus d'alertes{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAlerts;
