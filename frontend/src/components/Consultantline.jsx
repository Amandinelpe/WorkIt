import React from "react";
import PropTypes from "prop-types";
import consultantlogo from "../assets/img/personlogo.png";
import "../styles/ConsultantLine.css";

const ConsultantLine = ({ consultant }) => {
  return (
    <div className="consultantline_body">
      <img src={consultantlogo} alt="logo" className="consultant_avatar" />
      <div className="personal_information_consultant">
        <h1 className="consultant_name">
          {consultant.firstname} {consultant.lastname}{" "}
        </h1>
        <div className="consultant_contact_information">
          <h1 className="consultant_phone_number">{consultant.phone}</h1>
          <h1>{consultant.email}</h1>
        </div>
      </div>
      <div className="modify_delete_buttons">
        <button type="button" className="button_consultant_modify">
          {" "}
          Modifier
        </button>
        <button type="button" className="button_consultant_delete">
          {" "}
          Supprimer
        </button>
      </div>
    </div>
  );
};

ConsultantLine.propTypes = {
  consultant: PropTypes.string.isRequired,
};

export default ConsultantLine;
