import React, { useState, useEffect } from "react";
import { GetOffers } from "../utils/getOffers";
import Offer from "./Offer";
import StateBox from "./StateBox";

const AnnoncesConsultant = () => {
  const [offers, setOffers] = useState([]);
  const [stateOffer, setStateOffer] = useState(0);

  const getFilterOffers = async () => {
    setOffers(await GetOffers(stateOffer));
  };

  useEffect(() => {
    getFilterOffers();
  }, [stateOffer]);

  console.warn(stateOffer, "stateOffer");
  return (
    <div>
      <div className="filters_offers">
        <div className="mainPage_filters">
          <StateBox setState={setStateOffer} />
        </div>
        <div className="mainPage_offers">
          <div className="all_offres_titleblock">
            <h2 className="all_offres_title">Les Offres</h2>
          </div>
          <div className="offers_body">
            {offers.map((offer) => (
              <Offer firm={offer.firm} date={offer.date} />
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
