import React, { useState } from "react";
import ImageArray from "../../constants/ImageArray";
import styled from "styled-components";
import ThumbnailsMap from "../../helpers/thumbnails";

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ThumbnailGallery = ({ onThumbnailClick, index }) => {
  return (
    <ThumbnailsMap
      imageArray={ImageArray}
      onThumbnailClick={onThumbnailClick}
      index={index}
    />
  );
};

export default ThumbnailGallery;
