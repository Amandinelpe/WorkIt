import { React, useState } from "react";
import "../styles/Offer.css";
// import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/Md";
import logo from "../assets/img/entreprise.png";

const Offer = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bloc_offer">
      <div className="offer_block_job">
        <p id="text_entreprise">Apple</p>
        <p id="text_job">Développeur web - Bordeaux</p>
        <div className="offer_filter">
          <p className="border_button">Contrat</p>
          <p className="border_button">City</p>
        </div>
        <p id="text_date">Le 02/01/2022</p>
      </div>
      <div className="offer_block_details">
        <p id="border_button_offer">Voir l'offre</p>
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          onKeyDown=""
          role="presentation"
        >
          {/* {isFavorite ? (
            <MdOutlineFavorite id="full_earth" />
          ) : (
            <MdOutlineFavoriteBorder id="empty_earth" />
          )} */}
        </div>
      </div>
      <img src={logo} alt="logo entreprise" className="offer_logo" />
    </div>
  );
};

export default Offer;
