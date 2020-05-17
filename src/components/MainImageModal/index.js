import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

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
  border: 10px solid black;
  background: black;
`;

const CurrentSlide = styled.img`
  display: block;
  position: absolute;
  ${"" /* width: 100%; */}
  ${"" /* height: 100%; */}
  object-fit: cover;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  ${"" /* border-radius: 20px; */}
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

const MainImageModal = ({
  index,
  onClick,
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
        <ImgModal
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return;
          }}
        >
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
                onClick={onClick}
                key={mainSrc}
              ></CurrentSlide>
            </CSSTransition>
          </TransitionGroup>
        </ImgModal>
      </ModalContainer>
    );
  } else return null;
};

export default MainImageModal;
