import React from "react";
import "./css/expertises.css";
import Adozas from "./expertises/Adozas";
import Biztositas from "./expertises/Biztositas";
import Business from "./expertises/Business";
import Csalad from "./expertises/Csalad";
import Ingatlan from "./expertises/Ingatlan";
import Polg from "./expertises/Polg";

const Expertises = () => {
  return (
    <div className="exp-cont">
      <h2 className="szak">Szakterületeim</h2>
      <div id="exp" className="exp__container">
        <Biztositas />
        <Adozas />
        <Csalad />
        <Ingatlan />
        <Business />
        <Polg />
      </div>
    </div>
  );
};

export default Expertises;
