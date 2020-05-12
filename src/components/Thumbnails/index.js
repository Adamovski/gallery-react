import React from "react";
import "./thumbnails.css";
import ImageArray from "../../constants/ImageArray";
// import imgArr from "../constans/imgArr";

const ThumbnailGallery = (props) => {
  const ImgArr = [
    ...ImageArray.map((item, index) => {
      if (index === props.index) {
        return (
          <img
            src={item}
            data-index={index}
            onClick={props.onClick}
            key={index}
            className="active"
          ></img>
        );
      } else {
        return (
          <img
            src={item}
            data-index={index}
            onClick={props.onClick}
            key={index}
          ></img>
        );
      }
    }),
  ];

  return (
    <div className="imgs">
      {ImgArr.map((item) => {
        return item;
      })}
    </div>
  );
};

export default ThumbnailGallery;
