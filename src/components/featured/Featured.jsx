import React from "react";
import "./featured.css";
import { IndoreImage, DelhiImage, MumbaiImage } from "../../assets/index";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={MumbaiImage} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={DelhiImage} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>80 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={IndoreImage} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Indore</h1>
          <h2>60 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
