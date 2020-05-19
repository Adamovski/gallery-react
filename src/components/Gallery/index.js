import React, { useState } from "react";
import Thumbnails from "../Thumbnails";
import MainImage from "../MainImage";
import imageArray from "../../constants/imageArray";
import MainImageModal from "../MainImageModal";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 56px;
  border: white solid 4px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 500px;
`;

const Gallery = function () {
  const [index, setIndex] = useState(0);
  const mainSrc = imageArray[index];
  const [isVisible, setIsVisible] = useState(false);

  // open fullscreen image module
  const openModule = () => setIsVisible(!isVisible);

  //close image module
  const closeModule = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsVisible(false);
  };

  //change main image to clicked image
  const onThumbnailClick = (e) => {
    e.stopPropagation();
    setIndex(parseInt(e.target.getAttribute("data-index")));
  };

  //display next image as main image
  const forwardClick = (e) => {
    e.stopPropagation();
    if (index < imageArray.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };

  //display previous image as clicked image
  const backClick = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(imageArray.length - 1);
    }
    console.log(index);
  };

  return (
    <Container>
      <MainImageModal
        index={index}
        isVisible={isVisible}
        backClick={backClick}
        forwardClick={forwardClick}
        closeModule={closeModule}
        mainSrc={mainSrc}
      />
      <Wrapper>
        <MainImage
          openModule={openModule}
          mainSrc={mainSrc}
          forwardClick={forwardClick}
          backClick={backClick}
        />
      </Wrapper>
      <Wrapper>
        <Thumbnails
          onThumbnailClick={onThumbnailClick}
          index={index}
          imageArray={imageArray}
        />
      </Wrapper>
    </Container>
  );
};

export default Gallery;
