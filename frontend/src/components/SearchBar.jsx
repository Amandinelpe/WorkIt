import React from "react";
// import { BiSearchAlt } from "react-icons/Bi";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="inputBox">
        <input type="text" required="required" placeholder="Quoi ?" />
      </div>
      <div className="inputBox">
        <input type="text" required="required" placeholder="Ou ?" />
      </div>
      {/* <BiSearchAlt className="searchButton" /> */}
    </div>
  );
};

export default SearchBar;
