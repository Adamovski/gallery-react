import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search/index";
import ImageResults from "./imageResult/index";
import MainImage from "../MainImage";
import MainImageModal from "../MainImageModal";

const Container = styled.div`
  border: white solid 4px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImgsWrapper = styled.div`
  max-width: 500px;
`;
const Wrapper = styled.div`
  padding-top: 56px;
`;

const PixabayGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const mainSrc = images.length > 0 ? images[index].largeImageURL : [];

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
    if (index < images.length - 1) {
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
      setIndex(images.length - 1);
    }
  };

  return (
    <Wrapper>
      <Search
        index={index}
        onThumbnailClick={onThumbnailClick}
        images={images}
        setImages={setImages}
      />
      {images.length > 0 ? (
        <Container>
          <MainImageModal
            index={index}
            isVisible={isVisible}
            backClick={backClick}
            forwardClick={forwardClick}
            closeModule={closeModule}
            mainSrc={mainSrc}
          />
          <ImgsWrapper>
            <MainImage
              openModule={openModule}
              mainSrc={mainSrc}
              forwardClick={forwardClick}
              backClick={backClick}
            />
          </ImgsWrapper>
          <ImgsWrapper>
            <ImageResults
              onThumbnailClick={onThumbnailClick}
              index={index}
              images={images.map((item) => item.largeImageURL)}
            />
          </ImgsWrapper>
        </Container>
      ) : null}
    </Wrapper>
  );
};

export default PixabayGallery;
