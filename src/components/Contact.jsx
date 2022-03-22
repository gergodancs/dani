import React from "react";
import Datas from "../contact/Datas";
import Map from "../contact/Map";

const Contact = () => {
  return (
    <div className="cont-cont">
      <h2 className="rolam">Kapcsolat</h2>
      <div id="contact" className="contact__container">
        <Datas />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
