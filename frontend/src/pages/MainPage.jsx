import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { GetFiveOffers } from "../utils/GetOffers";
import "../styles/MainPage.css";
import Offer from "../components/Offer";

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
          motive.
        </h2>
        <SearchBar />
        {offers.map((offer) => (
          <Offer date={offer.date} />
        ))}

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
