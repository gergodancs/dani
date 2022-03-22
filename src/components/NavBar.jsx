import React from "react";
import "./css/nav.css";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img
        className={`logo`}
        src={require("./pics/kdp__logo.png")}
        alt="logo"
      />
      <ul className={`nav__menu`}>
        <li>
          <a href="#about">Rólam</a>
        </li>
        <li>
          <a href="#exp">Szakterületek</a>
        </li>
        <li>
          <a href="#contact">Kapcsolat</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
