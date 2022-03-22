import React from "react";

const Csalad = () => {
  return (
    <div className="exp__cards">
      <img src={require("../pics/people.png")} alt="people" />
      <h3>Családjogi és öröklési ügyek:</h3>
      <ul>
        <li>házassági vagyonjogi szerződés</li>
        <li>házassági- illetve élettársi vagyonközösség megszüntetése</li>
        <li>házassági bontóper</li>
        <li>hagyatéki igényekkel kapcsolatos tanácsadás</li>
        <li>hagyatéki eljárásban való képviselet</li>
      </ul>
    </div>
  );
};

export default Csalad;
