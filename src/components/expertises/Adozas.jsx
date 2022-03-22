import React from "react";

const Adozas = () => {
  return (
    <div className="exp__cards">
      <img src={require("../pics/calculator.png")} alt="calc" />
      <h3>Adóügyek</h3>
      <ul>
        <li>
          adóhatóság előtti képviselet ellenőrzések során és egyéb eljárásokban
          ideértve fellebbezést és a bírósági felülvizsgálatot is
        </li>
        <li>
          tanácsadás visszterhes vagyonszerzési, ajándékozási és öröklési
          illetékkel kapcsolatban
        </li>
        <li>
          adózási mód (KATA, KIVA, társasági adó) megválasztásával kapcsolatos
          tanácsadás társaságoknak, valamint egyéni vállalkozóknak
        </li>
        <li>adóhatósági beadványok szerkesztése</li>
      </ul>
    </div>
  );
};

export default Adozas;
