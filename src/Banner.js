import React from "react";
import "./Banner.css";
import banner from "./banner_image.png";
function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="" className="banner__image" />
    </div>
  );
}

export default Banner;
