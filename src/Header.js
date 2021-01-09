import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Anthony R. Navarro | Web Developer</h1>
      </div>

      <div className="header__right">
        <p>About me.</p>
        <p>Projects.</p>
        <p>Contact.</p>
      </div>
    </div>
  );
}

export default Header;
