import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import { GetFiveOffers } from "../utils/getOffers";
import Offer from "./Offer";
import "../styles/AnnoncesConsultant.css";
import "../styles/OffersList.css";

const AnnoncesConsultant = ({ show }) => {
  const [offers, setOffers] = useState([]);

  const getFiveOffers = async () => {
    setOffers(await GetFiveOffers());
  };

  useEffect(() => {
    getFiveOffers();
  }, []);

  if (!show) return null;

  return (
    <div className="annonce-consultant">
      <div className="filters_offers">
        <div className="mainPage_filters">
          <Filter table="state_offer" name="Etat de l'offre" />
        </div>
        <div className="mainPage_offers">
          <div className="all_offers_titleblock">
            <h2 className="all_offers_title">Les Offres</h2>
          </div>
          <div className="offers_body">
            {offers.map((offer) => (
              <Offer
                title={offer.title}
                firm={offer.firm}
                date={offer.date}
                logo={offer.logo_url}
              />
            ))}
            <button type="button" className="all_offres_button">
              {" "}
              Voir plus d'offres{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnoncesConsultant;

AnnoncesConsultant.propTypes = {
  show: PropTypes.bool.isRequired,
};
