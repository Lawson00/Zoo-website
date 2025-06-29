import React from "react";
import "./Zoo.css";
import white_arrow from "../../assets/white-arrow.png";
import gallery_0 from "../../assets/3.avif";
import gallery_4 from "../../assets/4.avif";
import gallery_2 from "../../assets/2.avif";
import gallery_3 from "../../assets/3.avif";

const Zoo = () => {
  return (
    <div className="zoo" id="galleryPage">
      <div className="gallery">
        <img src={gallery_0} alt="" />
        <img src={gallery_4} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Zoo;
