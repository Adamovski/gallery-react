import React, { useState } from "react";
import ImageArray from "../../constants/ImageArray";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const Container = styled.div`
  max-width: 500px;
  margin-left: 50px;
  border: white solid 2px;
  background: white;
`;

const Imgs = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  gap: 5px;
  justify-content: space-between;
`;

const Img = styled.img`
  display: inline-block;
  flex: 1;
  max-width: 124px;
  cursor: pointer;
  padding: 2px;
`;

const slideFunction = (e) => {
  e.target.style.transform = "translateX(-200px)";
  console.log(e);
};

const ThumbnailSlides = ({ onThumbnailClick, index }) => {
  let ImgArr = [];

  return (
    <Wrapper>
      <Container>
        <Imgs>
          {ImageArray.map((item, i) => {
            if (i === index) {
              return (
                <Img
                  onClick={onThumbnailClick}
                  src={item}
                  data-index={i}
                  key={i}
                  className="active"
                />
              );
            } else {
              return (
                <Img
                  onClick={onThumbnailClick}
                  src={item}
                  data-index={i}
                  key={i}
                />
              );
            }
          })}
        </Imgs>
      </Container>
    </Wrapper>
  );
};

export default ThumbnailSlides;
