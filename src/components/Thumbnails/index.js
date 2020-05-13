import React, { useState } from "react";
import ImageArray from "../../constants/ImageArray";
import styled from "styled-components";

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ThumbnailGallery = ({ onThumbnailClick, index }) => {
  let ImgArr = [
    ...ImageArray.map((item, i) => {
      if (i === index) {
        return (
          <Img
            src={item}
            data-index={i}
            onClick={onThumbnailClick}
            key={i}
            className="active"
          />
        );
      } else {
        return (
          <Img
            src={item}
            data-index={i}
            onClick={onThumbnailClick}
            key={i}
          />
        );
      }
    }),
  ];

  return (
    <Imgs>
      {ImgArr.map((item) => {
        return item;
      })}
    </Imgs>
  );
};

export default ThumbnailGallery;
