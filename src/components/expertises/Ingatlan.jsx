import React from "react";

const Ingatlan = () => {
  return (
    <div className="exp__cards sm">
      <img src={require("../pics/home.png")} alt="home" />
      <div className="ing-content">
        <h3>Ingatlan</h3>
        <ul>
          <li>tanácsadás</li>
          <li>adás-vétel-ajándékozás</li>
          <li>egyéb ingatlanra irányuló jogügylet</li>
        </ul>
      </div>
    </div>
  );
};

export default Ingatlan;
