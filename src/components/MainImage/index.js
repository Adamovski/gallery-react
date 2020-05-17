import React from "react";
import styled from "styled-components";

const MainImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const Btn = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  display: inline-block;
  border: none;
  position: absolute;
  font-size: 30px;
  color: white;
  opacity: 0.2;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const PrevBtn = styled(Btn)`
  height: 100%;
  left: 2%;
  top: 0;
`;

const NextBtn = styled(Btn)`
  height: 100%;
  right: 2%;
  top: 0;
`;

const Expand = styled(Btn)`
  bottom: 8px;
  right: 8px;
`;

const MainImage = (props) => (
  <MainImgWrapper>
    <PrevBtn className="fas fa-arrow-left" onClick={props.backClick}></PrevBtn>
    <NextBtn className="fas fa-arrow-right" onClick={props.backClick}></NextBtn>
    <Expand className="fas fa-expand" onClick={props.openModule}></Expand>
    <Img src={props.mainSrc}></Img>
  </MainImgWrapper>
);

export default MainImage;
