import React from "react";
import Thumbnails from "../../Thumbnails";

const ImageResults = ({ images, index, onThumbnailClick }) => {
  return (
    <Thumbnails
      imageArray={images}
      index={index}
      onThumbnailClick={onThumbnailClick}
    />
  );
};

// ImageResults.propTypes = {
//   images: propTypes.array.isRequired,
// };

export default ImageResults;
