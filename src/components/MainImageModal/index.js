import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ModalContainer = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 95);
  display: flex;
  z-index: 10;
`;

const ImgModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
`;

const CurrentSlide = styled.img`
  display: block;
  position: absolute;
  object-fit: cover;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  &.fade-appear {
    opacity: 0;
    z-index: 1;
  }
  &.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 2000ms linear;
  }
  &.fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 2000ms linear;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 2000ms linear;
  }
  &.fade-exit-done {
    opacity: 0;
  }
  @media (max-width: 960px) {
    height: auto;
    width: 100%;
  }
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

const CloseBtn = styled(Btn)`
  top: 20px;
  left: 20px;
`;

//stop clicking on image body closing module
const imageStopPropagation = (e) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

const MainImageModal = ({
  isVisible,
  backClick,
  forwardClick,
  closeModule,
  mainSrc,
}) => {
  if (isVisible) {
    return (
      <ModalContainer onClick={closeModule}>
        <PrevBtn className="fas fa-arrow-left" onClick={backClick}></PrevBtn>
        <NextBtn
          className="fas fa-arrow-right"
          onClick={forwardClick}
        ></NextBtn>
        <ImgModal onClick={closeModule}>
          <CloseBtn
            className="fas fa-times"
            id="closeBtn"
            onClick={closeModule}
          ></CloseBtn>
          <TransitionGroup>
            <CSSTransition
              in={isVisible}
              appear={true}
              timeout={2000}
              classNames="fade"
              key={mainSrc}
            >
              <CurrentSlide
                src={mainSrc}
                key={mainSrc}
                onClick={imageStopPropagation}
              ></CurrentSlide>
            </CSSTransition>
          </TransitionGroup>
        </ImgModal>
      </ModalContainer>
    );
  } else return null;
};

export default MainImageModal;
