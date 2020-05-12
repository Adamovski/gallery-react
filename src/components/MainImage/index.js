import React from "react";
import "./mainImage.css";

const MainImage = (props) => (
  <div className="main-img">
    <i className="fas fa-arrow-left" id="prevBtn" onClick={props.backClick}></i>
    <i
      className="fas fa-arrow-right"
      id="nextBtn"
      onClick={props.forwardClick}
    ></i>
    <img src={props.mainSrc}></img>
  </div>
);

export default MainImage;
