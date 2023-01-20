import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { GetFiveOffers } from "../utils/getOffers";
import { FilterOffer } from "../apis/offerApi";
import Offer from "../components/Offer";
import SalaryBox from "../components/SalaryBox";
import PublicationDateBox from "../components/PublicationDateBox";

import "../styles/MainPage.css";

const MainPage = () => {
  const [offers, setOffers] = useState([]);

  const [city, setCity] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [choosenDate, setChoosenDate] = useState("");
  const [salary, setSalary] = useState(0);

  /*   Will serve soon */
  console.warn(choosenDate, "choosenDate");
  console.warn(selectedJob, "selectedJob");
  console.warn(city, "city");
  console.warn(salary, "salary");

  const getFiveOffers = async () => {
    setOffers(await GetFiveOffers());
  };

  const filter_offers = async () => {
    await FilterOffer(city).then((res) => {setOffers([res.data])});
  }

  console.log (offers, "offers");
  useEffect(() => {
    getFiveOffers();
  }, []);

  useEffect(() => {city!="" ? filter_offers():null}, [city]);

  return (
    <div className="mainPage">
      <button onClick={filter_offers}> Test </button>
      <NavBar />
      <div className="mainPage_body">
        <h2 className="mainpage_introduction">
          Comprendre ton histoire, ton parcours, ton projet, c'est ce qui nous
          motive
        </h2>
        <SearchBar setSelectedJob={setSelectedJob} setCity={setCity} />
        <div className="filters_offers">
          <div className="mainPage_filters">
            <SalaryBox salary={salary} setSalary={setSalary} />
            <PublicationDateBox setDate={setChoosenDate} />
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
