import React from "react";
import PropTypes from "prop-types";

const ConsultantLine = ({ consultant }) => {
  return (
    <div>
      <h1>
        {consultant.firstname} {consultant.lastname}{" "}
      </h1>
    </div>
  );
};

ConsultantLine.propTypes = {
  consultant: PropTypes.string.isRequired,
};

export default ConsultantLine;
