import React, { useState, useEffect } from "react";
import imageArray from "../../constants/imageArray";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Wrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlidingThumbnails = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-conent: space-between;
`;

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Img = styled.img`
  padding: 5px;
  width: 100%;
  flex: 1;
  height: auto;
  &.active {
    opacity: 0.3;
  }
  &.fade-appear {
    opacity: 0;
    z-index: 1;
  }
  &.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 250ms linear;
  }
  &.fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms linear 250ms;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 250ms linear;
  }
  &.fade-exit-done {
    opacity: 0;
  }
`;

const Btn = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  display: inline-block;
  border: none;
  font-size: 30px;
  color: black;
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
`;

const NextBtn = styled(Btn)`
  height: 100%;
`;

const ThumbnailSlides = () => {
  const [index, setIndex] = useState(0);

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
    console.log(newImageArray);
  };

  //make ImageArray a loops

  const newImageArray = [...imageArray];
  newImageArray.push(...imageArray.slice(imageArray.lenghth - 3));

//make image change by itself - useEffect can be used for setInterval functions

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < imageArray.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {/* {interval} */}
      <SlidingThumbnails>
        <PrevBtn className="fas fa-arrow-left" onClick={backClick}></PrevBtn>
        <Imgs>
          {newImageArray.map((item, i) => {
            if (i === index) {
              return (
                <Img src={item} data-index={i} key={i} className="active" />
              );
            } else if (index < i && i < index + 4) {
              return <Img src={item} data-index={i} key={i} />;
            }
          })}
        </Imgs>
        <NextBtn
          className="fas fa-arrow-right"
          onClick={forwardClick}
        ></NextBtn>
      </SlidingThumbnails>
    </Wrapper>
  );
};

export default ThumbnailSlides;
