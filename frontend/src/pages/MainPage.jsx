import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { GetFiveOffers } from "../utils/GetOffers";
import Offer from "../components/Offer";
import "../styles/MainPage.css";

const MainPage = () => {
  const [offers, setOffers] = useState([]);

  const getFiveOffers = async () => {
    setOffers(await GetFiveOffers());
  };

  useEffect(() => {
    getFiveOffers();
  }, []);

  return (
    <div className="mainPage">
      <NavBar />
      <div className="mainPage_body">
        <h2>
          Comprendre ton histoire, ton parcours, ton projet, c'est ce qui nous
          motive
        </h2>
        <SearchBar />
        <div className="mainPage_offers">
          <div className="all_offres_titleblock">
            <h2 className="all_offres_title"> Les offres du moment</h2>
          </div>
          {offers.map((offer) => (
            <Offer date={offer.date} />
          ))}
        </div>
        <Footer />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
