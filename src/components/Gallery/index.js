import React, { useState } from "react";
import ThumbnailGallery from "../Thumbnails";
import "./gallery.css";
import MainImage from "../MainImage";
import ImageArray from "../../constants/ImageArray";
import MainImageModal from "../MainImageModal";

const Gallery = function () {
  const [index, setIndex] = useState(0);
  const mainSrc = ImageArray[index];
  const [isVisible, setIsVisible] = useState(false);

  const openModule = () => setIsVisible(!isVisible);

  const closeModule = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsVisible(false);
  };

  const onThumbnailClick = (e) => {
    e.stopPropagation();
    setIndex(parseInt(e.target.getAttribute("data-index")));
  };

  const forwardClick = (e) => {
    e.stopPropagation();
    if (index < ImageArray.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const backClick = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(ImageArray.length - 1);
    }
  };

  return (
    <div className="container">
      <MainImageModal
        index={index}
        isVisible={isVisible}
        backClick={backClick}
        forwardClick={forwardClick}
        closeModule={closeModule}
      />
      <MainImage
        openModule={openModule}
        mainSrc={mainSrc}
        forwardClick={forwardClick}
        backClick={backClick}
      />
      <ThumbnailGallery onThumbnailClick={onThumbnailClick} index={index} />
    </div>
  );
};

export default Gallery;
