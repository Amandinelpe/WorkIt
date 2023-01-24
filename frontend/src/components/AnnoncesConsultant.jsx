import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { GetFiveOffers } from "../utils/getOffers";
import Offer from "./Offer";
import "../styles/AnnoncesConsultant.css";

const AnnoncesConsultant = () => {
  const [offers, setOffers] = useState([]);

  const getFiveOffers = async () => {
    setOffers(await GetFiveOffers());
  };

  useEffect(() => {
    getFiveOffers();
  }, []);
  return (
    <div>
      <div className="filters_offers">
        <div className="mainPage_filters">
          <Filter table="state_offer" name="Etat de l'offre" />
        </div>
        <div className="mainPage_offers">
          <div className="all_offres_titleblock">
            <h2 className="all_offres_title">Les Offres</h2>
          </div>
          <div className="offers_body">
            {offers.map((offer) => (
              <Offer firm={offer.firm} date={offer.date} />
            ))}
            <button type="button" className="all_offres_button_consultant">
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
