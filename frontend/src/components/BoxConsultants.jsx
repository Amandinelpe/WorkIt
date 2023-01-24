import React from "react";
import PropTypes from "prop-types";
import dataBoxConsultants from "../utils/dataBoxConsultants";
import "../styles/BoxCandidate.css";

const BoxCandidate = ({ handleContent }) => {
  const onClick = (e, link) => {
    e.preventDefault();
    handleContent(link);
  };

  return (
    <div className="dashboard">
      {dataBoxConsultants.map((box) => (
        <div
          key={box.id}
          className="box_candidate"
          onClick={(e) => onClick(e, box.link)}
          role="presentation"
        >
          <div key={box.id} className="box_candidate_title">
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

BoxCandidate.propTypes = {
  handleContent: PropTypes.func.isRequired,
};
