import React from "react";
import PropTypes from "prop-types";
import dataBox from "../utils/dataBox";
import "../styles/BoxCandidate.css";

const BoxCandidate = ({ setContent }) => {
  const onClick = (e, link) => {
    e.preventDefault();
    setContent(link);
  };

  return (
    <div className="dashboard">
      {dataBox.map((box) => (
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
  setContent: PropTypes.func.isRequired,
};
