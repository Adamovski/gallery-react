import React from "react";
import styled from "styled-components";

const SideDrawer = styled.nav`
  height: 40%;
  background: #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transition: transform 500ms ease-out;
  transform: translateY(-200%);
  margin-top: ${({ sideDrawerOpen }) => (sideDrawerOpen ? "56px" : "0")};
  transform: ${({ sideDrawerOpen }) =>
    sideDrawerOpen ? "translateY(0)" : "translateY(-200%)"};
  @media (min-width: 769px) {
    display: none;
  }
`;

const SideDrawerList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideDrawerLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: #143774;
  &:hover,
  @:active {
    color: #fa923f;
  }
`;

const sideDrawer = ({ sideDrawerOpen }) => {
  return (
    <SideDrawer sideDrawerOpen={sideDrawerOpen}>
      <SideDrawerList>
        <li>
          <SideDrawerLink href="/">Gallery</SideDrawerLink>
        </li>
      </SideDrawerList>
    </SideDrawer>
  );
};

export default sideDrawer;
