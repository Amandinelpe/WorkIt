import React from "react";
// import { Link } from "react-router-dom";
import dataBox from "../utils/dataBox";
import "../styles/BoxCandidate.css";

const BoxCandidate = () => {
  return (
    <div className="dashboard">
      {dataBox.map((box) => (
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

export default BoxCandidate;
