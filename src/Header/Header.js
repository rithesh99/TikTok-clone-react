import React from "react";
import "./Header.css";
import Pic from "./logo.png"

function Header() {
  return (
    <div className="header">
      <div className="header__logo__component">
        <img
            className="header__logo"
          src={Pic}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
