import React, { useState } from "react";
import styled from "styled-components";

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;

const Img = styled.img`
  display: inline-block;
  width: 100%;
  cursor: pointer;
`;

const ImgActive = styled(Img)`
  opacity: 0.7;
`;

//create galery of small images with active image dimmed
const Thumbnails = ({ onThumbnailClick, index, imageArray }) => {
  return (
    <Imgs>
      {imageArray.map((item, i) => {
        if (i === index) {
          return (
            <ImgActive
              src={item}
              data-index={i}
              onClick={onThumbnailClick}
              key={i}
            />
          );
        } else {
          return (
            <Img src={item} data-index={i} onClick={onThumbnailClick} key={i} />
          );
        }
      })}
    </Imgs>
  );
};

export default Thumbnails;
