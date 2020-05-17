import React from "react";
import ImageArray from "../../constants/ImageArray";
import styled from "styled-components";

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
  ${"" /* display: ${(props) => (props.isVisible ? "flex" : "none")}; */}
  z-index: 10;
`;

const ImgModal = styled.div`
  position: relative;
  max-width: 760px;
  padding: 10px;
  background: white;
  display: flex;
`;

const Slide = styled.img`
  display: none;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 2s ease-out;
  opacity: 1;
  margin: auto;
`;

const CurrentSlide = styled(Slide)`
  display: inline-block;
  position: initial;
  opacity: 1;
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
  forwardClick,
  backClick,
  closeModule,
}) => {
  const ImgArr = [
    ...ImageArray.map((item, i) => {
      if (i === index) {
        return (
          <CurrentSlide
            src={item}
            data-index={i}
            onClick={onClick}
            key={i}
          ></CurrentSlide>
        );
      } else {
        return (
          <Slide src={item} data-index={i} onClick={onClick} key={i}></Slide>
        );
      }
    }),
  ];

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
          {ImgArr.map((item) => {
            return item;
          })}
        </ImgModal>
      </ModalContainer>
    );
  } else return null;
};

export default MainImageModal;
