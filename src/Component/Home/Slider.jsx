import React from "react";
import "./Home.css";
const Slider = ({ src }) => {
  return (
    <div>
      <div class="carousel-slide">
        <img src={src} className="logo" alt="loading" />
      </div>
    </div>
  );
};

export default Slider;
