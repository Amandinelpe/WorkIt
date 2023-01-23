import { React, useState } from "react";
import "../styles/Offer.css";
import PropTypes from "prop-types";
import OfferDetail from "../modals/OfferDetail";

const Offer = ({ firm, date, title, logo, city }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatedDate = new Date(date).toLocaleDateString();

  const deployModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bloc_offer">
      <div className="offer_block_job">
        <p id="text_entreprise">{firm}</p>
        <br />
        <p id="text_job">{title}</p>
        <div className="offer_filter">
          <p className="border_button">{city}</p>
        </div>
        <p id="text_date">{formatedDate}</p>
      </div>
      <div className="offer_block_details">
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          onKeyDown=""
          role="presentation"
        />
      </div>
      <img src={logo} alt="logo entreprise" className="offer_logo" />
      <div>
        <button type="submit" id="border_button_offer" onClick={deployModal}>
          Voir l'offre
        </button>
        <OfferDetail isModalOpen={isModalOpen} setIsModalOpen={deployModal} />
      </div>
    </div>
  );
};

Offer.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  firm: PropTypes.string.isRequired,
};

export default Offer;
