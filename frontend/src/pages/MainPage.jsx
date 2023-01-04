import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./MainPage.css";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="mainPage">
      <NavBar />
      <div className="mainPage_body">
        <h2>
          Comprendre ton histoire, ton parcours, ton projet, c'est ce qui nous
          motive.
        </h2>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
