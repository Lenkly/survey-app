import React from "react";
import "./Header.css";
import Logo from "./surveylogo.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Survey"></img>
    </header>
  );
}

export default Header;
