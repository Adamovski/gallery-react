import React from "react";
import "./mainImage.css";
import styled from "styled-components";

const MainImg = styled.div`
  position: relative;
`;

const Btn = styled.button`
  background: none;
  display: inline-block;
  border: none;
  position: absolute;
  top: 50%;
  z-index: 10;
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
  left: 2%;
`;

const NextBtn = styled(Btn)`
  right: 2%;
`;

const MainImage = (props) => (
  <div className="main-img">
    <PrevBtn className="fas fa-arrow-left" onClick={props.backClick}></PrevBtn>
    <NextBtn className="fas fa-arrow-right" onClick={props.backClick}></NextBtn>
    <img src={props.mainSrc}></img>
  </div>
);

export default MainImage;
