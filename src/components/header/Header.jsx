import React from "react";
import logo from "../../images/vector_Aroun_the_us.svg"; // ajusta si es necesario

export default function Header() {
  return (
    <header className="header page__section">
      <img
        src={logo}
        alt="Around the U.S logo"
        className="header__logo-image"
      />
    </header>
  );
}
