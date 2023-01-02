import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="inputBox">
        <input type="text" required="required" placeholder="Quoi ?" />
      </div>
      <div className="inputBox">
        <input type="text" required="required" placeholder="Ou ?" />
      </div>
      <button></button>
    </div>
  );
};

export default SearchBar;
