import React from "react";
import NavBar from "../components/NavBar";
import BoxCandidate from "../components/BoxCandidate";
import "../styles/DashboardCandidate.css";

const DashboardCandidate = () => {
  return (
    <div>
      <NavBar />
      <div className="mydashboard">
        <BoxCandidate />
      </div>
    </div>
  );
};

export default DashboardCandidate;
