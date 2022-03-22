import React from "react";

const Map = () => {
  return (
    <div className="exp__cards  map">
      <iframe
        title="adress"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.4798717544386!2d19.052397915641386!3d47.50004510332591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6aec4e8985%3A0x907ff5a0c2b68e01!2sBudapest%2C%20Bajcsy-Zsilinszky%20%C3%BAt%2016%2C%201051!5e0!3m2!1shu!2shu!4v1647624102386!5m2!1shu!2shu"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
