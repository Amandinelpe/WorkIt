import React from "react";
import { Link } from "react-router-dom";
import "./DashboardBoxCandidate.css";

const DashboardBoxCandidate = () => {
  return (
    <div>
      <div className="dashboardBoxCandidate">
        <h3>Mon tableau de bord</h3>
      </div>
      <div className="dashboardBoxCandidate-body">
        <ul>
          <div className="my-favorites">
            <Link to="my-favorites">Mes coups de coeur</Link>
          </div>
          <div className="my-alerts">
            <Link to="my-alerts">Mes alertes</Link>
          </div>
          <div className="my-job-applications">
            <Link to="my-job-applications">Mes candidatures</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardBoxCandidate;
