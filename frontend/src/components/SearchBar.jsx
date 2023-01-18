import React from "react";
import "../styles/SearchBar.css";
import search from "../assets/img/search.png";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="inputBox2">
        <div className="inputBox">
          <input type="text" required="required" placeholder="Quoi ?" />
        </div>
        <div className="inputBox">
          <input type="text" required="required" placeholder="Ou ?" />
        </div>
        <img src={search} alt="search" className="logo" />
      </div>
    </div>
  );
};

export default SearchBar;
