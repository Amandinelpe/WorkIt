import React from "react";
import PropTypes from "prop-types";
import publicationDate from "../utils/publicationDate";
import "../styles/PublicationDateBox.css";

const PublicationDateBox = ({ setDate }) => {
  return (
    <div className="publication_date_box">
      <div className="date_titleblock">
        <h2 className="date_title"> Date de publication</h2>
      </div>
      <div className="date_body">
        <fieldset>
          {publicationDate.map((date) => (
            <div>
              <input
                className="input_date"
                type="radio"
                id={date.id}
                name={date.name}
                value={date.value}
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor={date.id}>{date.value}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default PublicationDateBox;

PublicationDateBox.propTypes = {
  setDate: PropTypes.func.isRequired,
};
