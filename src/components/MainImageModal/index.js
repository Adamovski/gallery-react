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
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  z-index: 10;
`;

const ImgModal = styled.div`
  position: relative;
  max-width: 760px;
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

const MainImageModal = ({ index, onClick, isVisible }) => {
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
  return (
    <ModalContainer isVisible={isVisible}>
      <i className="fas fa-arrow-left" id="prevBtn"></i>
      <i className="fas fa-arrow-right" id="nextBtn"></i>
      <ImgModal>
        <i className="fas fa-times" id="closeBtn"></i>
        {ImgArr.map((item) => {
          return item;
        })}
      </ImgModal>
    </ModalContainer>
  );
};

export default MainImageModal;
