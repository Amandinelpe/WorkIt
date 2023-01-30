import React from "react";
import PropTypes from "prop-types";
import dataBox from "../utils/dataBox";
import "../styles/BoxCandidate.css";

const BoxCandidate = ({ handleContent }) => {
  const onClick = (e, link) => {
    e.preventDefault();
    handleContent(link);
  };

  return (
    <div className="dashboard">
      {dataBox.map((box) => (
        <div key={box.id} className="box_candidate">
          <div key={box.id} className="box_candidate_title">
            <h1>{box.title}</h1>
          </div>
          <div className="box_candidate_body">
            <ul>
              {box.sections.map((section) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  className="box-candidate-li "
                  onClick={(e) => onClick(e, section)}
                >
                  {section}
                </li>
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
