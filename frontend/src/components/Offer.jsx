import { React, useState } from "react";
import "../styles/Offer.css";
import PropTypes from "prop-types";

const Offer = ({ firm, date, title, logo, city, experience }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bloc_offer">
      <div className="offer_block_job">
        <p id="text_entreprise">{firm}</p>
        <br />
        <p id="text_job">{title}</p>
        <div className="offer_filter">
          <p className="border_button">{experience}</p>
          <p className="border_button">{city}</p>
        </div>
        <p id="text_date">{date}</p>
      </div>
      <div className="offer_block_details">
        <p id="border_button_offer">Voir l'offre</p>
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          onKeyDown=""
          role="presentation"
        />
      </div>
      <img src={logo} alt="logo entreprise" className="offer_logo" />
    </div>
  );
};

Offer.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  firm: PropTypes.string.isRequired,
};

export default Offer;
