import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { GetFiveOffers } from "../utils/getOffers";
import Offer from "../components/Offer";
import SalaryBox from "../components/SalaryBox";
import PublicationDateBox from "../components/PublicationDateBox";

import "../styles/MainPage.css";

const MainPage = () => {
  const [offers, setOffers] = useState([]);

  /*   Will serve soon */
  /*  const [job, setJob] = useState([]);
  const [cities, setCities] = useState([]); */
  /*  const [selectedJob, setSelectedJob] = useState(""); */

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
        <h2 className="mainpage_introduction">
          Comprendre ton histoire, ton parcours, ton projet, c'est ce qui nous
          motive
        </h2>
        <SearchBar />
        <div className="filters_offers">
          <div className="mainPage_filters">
            <SalaryBox />
            <PublicationDateBox />
          </div>
          <div className="mainPage_offers">
            <div className="all_offres_titleblock">
              <h2 className="all_offres_title"> Les offres du moment</h2>
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
      <Footer />
    </div>
  );
};

export default MainPage;
