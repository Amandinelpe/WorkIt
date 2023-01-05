import React from "react";
import "../styles/PublicationDateBox.css";

const PublicationDateBox = () => {
  return (
    <div className="publication_date_box">
      <div className="date_titleblock">
        <h2 className="date_title"> Date de publication</h2>
      </div>
      <div className="date_body">
        <fieldset>
          <input
            type="radio"
            id="all"
            name="datechoice"
            value="Toutes les dates"
            className="input_date"
          />
          <label htmlFor="all">Toutes les dates</label>
          <br />
          <input
            type="radio"
            id="24h"
            name="datechoice"
            value="Dernières 24H"
            className="input_date"
          />
          <label htmlFor="24h">Dernières 24H</label>
          <br />
          <input
            type="radio"
            id="3days"
            name="datechoice"
            value="Depuis 3 jours"
            className="input_date"
          />
          <label htmlFor="3days">Depuis 3 jours</label>
          <br />
          <input
            type="radio"
            id="1week"
            name="datechoice"
            value="Depuis une semaine"
            className="input_date"
          />
          <label htmlFor="1week">Depuis une semaine</label>
          <br />
          <input
            type="radio"
            id="1month"
            name="datechoice"
            value="Depuis 1 mois"
            className="input_date"
          />
          <label htmlFor="1month">Depuis 1 mois</label>
          <br />
        </fieldset>
      </div>
    </div>
  );
};

export default PublicationDateBox;
