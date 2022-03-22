import React from "react";
import NavBar from "./NavBar";
import "./css/landing.css";

const Landing = () => {
  return (
    <div id="landing" className="landing__container">
      <NavBar />
      <div className="landing">
        <img className="dani" src={require("./pics/danijo.png")} alt="dani" />
        <div className="cimsor">
          <h1>dr. Kovács Dániel Pál</h1>
          <h4>ügyvéd</h4>
          <button>Küldjön üzenetet</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
