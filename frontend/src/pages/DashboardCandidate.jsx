import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxCandidate from "../components/BoxCandidate";
import { GetFavoritesOffers } from "../utils/getFavoritesOffers";
import Offer from "../components/Offer";
import "../styles/DashboardCandidate.css";

const DashboardCandidate = () => {
  const [favoritesOffers, setFavoritesOffers] = useState([]);

  const getFavoritesOffers = async () => {
    setFavoritesOffers(await GetFavoritesOffers());
  };

  useEffect(() => {
    getFavoritesOffers();
  }, []);

  return (
    <div>
      <NavBar />
      <HelloButton />
      <div className="mydashboard">
        <BoxCandidate />
      </div>
      <div className="mainPage_favorites_body">
        <div className="mainPage_favorites_offers">
          <div className="all_favorites_offers_titleblock">
            <h2 className="all_favorites_offers_title">Mes coups de coeur</h2>
          </div>
          <div className="favorites_offers_body">
            {favoritesOffers.map((offer) => (
              <Offer date={offer.date} />
            ))}
            <button type="button" className="all_favorites_offers_button">
              {" "}
              Voir plus d'offres{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidate;
