import React from "react";
import styled from "styled-components";

//backdrop to dim page on navigation mobile view sidedrawer expansion

const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 56px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${(props) => (props.isVisible ? "initial" : "none")};
`;

const backdrop = (props) => (
  <BackdropWrapper onClick={props.click} isVisible={props.isVisible} />
);

export default backdrop;
