import React from "react";
import NavList from "../NavComponents/NavList";
import Search from "../NavComponents/Search";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      {/* Search */}
      <Search />
      <div className="navListWork">
        {/* NavList */}
        <NavList />
      </div>
    </div>
  );
};

export default Nav;
