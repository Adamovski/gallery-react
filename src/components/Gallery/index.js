import React, { useState } from "react";
import ThumbnailGallery from "../Thumbnails";
import "./gallery.css";
import MainImage from "../MainImage";
import ImageArray from "../../constants/ImageArray";

const Gallery = function () {
  const [index, setIndex] = useState(0);
  const mainSrc = ImageArray[index];

  const onThumbnailClick = (i) => {
    setIndex(parseInt(i.target.getAttribute("data-index")));
  };

  const forwardClick = () => {
    console.log(index);
    if (index < ImageArray.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const backClick = (i) => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(ImageArray.length - 1);
    }
  };

  return (
    <div className="container">
      <MainImage
        mainSrc={mainSrc}
        forwardClick={forwardClick}
        backClick={backClick}
      />
      <ThumbnailGallery onClick={onThumbnailClick} index={index} />
    </div>
  );
};

export default Gallery;
