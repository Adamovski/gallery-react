import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: #143774;
`;

const sideDrawerToggleButton = (props) => (
  <ToggleButton onClick={props.click}>
    <ToggleButtonLine></ToggleButtonLine>
    <ToggleButtonLine></ToggleButtonLine>
    <ToggleButtonLine></ToggleButtonLine>
  </ToggleButton>
);

export default sideDrawerToggleButton;
