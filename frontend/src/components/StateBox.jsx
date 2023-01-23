import React from "react";
import PropTypes from "prop-types";
import stateOffer from "../utils/stateOffer";
import "../styles/PublicationDateBox.css";

const StateBox = ({ setState }) => {
  return (
    <div className="publication_date_box">
      <div className="date_titleblock">
        <h2 className="date_title">ETAT DE L'OFFRE</h2>
      </div>
      <div className="date_body">
        <fieldset>
          {stateOffer.map((state) => (
            <div>
              <input
                className="input_date"
                type="radio"
                id={state.id}
                name={state.name}
                value={state.value}
                onChange={(e) => setState(e.target.id)}
              />
              <label htmlFor={state.id}>{state.value}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default StateBox;

StateBox.propTypes = {
  setState: PropTypes.func.isRequired,
};
