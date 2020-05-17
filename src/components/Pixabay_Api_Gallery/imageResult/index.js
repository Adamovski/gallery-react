import React from "react";
import Thumbnails from "../../Thumbnails";
import styled from "styled-components";

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  border: white solid 4px;
  background: white;
`;

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
