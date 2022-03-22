import React from "react";

const Business = () => {
  return (
    <div className="exp__cards sm">
      <img src={require("../pics/money.png")} alt="money" />
      <h3>Vállalkozás</h3>
      <ul>
        <li>cégalapítás</li>
        <li>cég módosítás</li>
        <li>határozatok tárának vezetése</li>
      </ul>
    </div>
  );
};

export default Business;
