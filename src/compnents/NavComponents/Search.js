import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <img className="navLogo" src="/images/home-logo.svg" alt="" />
      <div className="searchInputLogo">
          <input className="inputSearch" placeholder="Search" />
        <div className="navSearchLogo">
          <img src="/images/search-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Search;
