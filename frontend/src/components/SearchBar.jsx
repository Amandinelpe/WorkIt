import React from "react";
// import { BiSearchAlt } from "react-icons/Bi";
import "../styles/SearchBar.css";

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
      </div>
      <p>Recherche avancée</p>

      {/* <BiSearchAlt className="searchButton" /> */}
    </div>
  );
};

export default SearchBar;
