import React from "react";
import dataBoxConsultants from "../utils/dataBoxConsultants";
import "../styles/BoxCandidate.css";

const BoxConsultants = () => {
  return (
    <div className="dashboard">
      {dataBoxConsultants.map((box) => (
        <div>
          <div key={box.id} className="box_candidate">
            <h1>{box.title}</h1>
          </div>
          <div className="box_candidate_body">
            <ul>
              {box.sections.map((section) => (
                <li>{section}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxConsultants;
