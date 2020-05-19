import React from "react";
import styled, { css } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SideDrawerWrapper = styled.nav`
  height: 40%;
  background: #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  &.slide-appear {
    transform: translateY(-200%);
  }
  &.slide-appear.slide-appear-active {
    transform: translateY(0);
    transition: transform 350ms linear;
  }
  &.slide-exit {
    transform: translateY(0);
  }
  &.slide-exit.slide-exit-active {
    transform: translateY(-200%);
    transition: transform 350ms linear;
  }
  &.slide-exit-done {
    transform: translateY(-200%);
  }
  margin-top: 56px;
  ${"" /* transform: translateY(-200%); */}
  ${"" /* transition: transform 350ms ease-out;
  
  margin-top: ${({ sideDrawerOpen }) => (sideDrawerOpen ? "56px" : "0")};
  transform: ${({ sideDrawerOpen }) =>
    sideDrawerOpen ? "translateY(0)" : "translateY(-200%)"}; */}
  @media (min-width: 769px) {
    display: none;
  }
`;

const SideDrawerList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

const SideDrawer = ({ sideDrawerOpen }) => {
  // figure out how to transition a conditional render - currently not working
  if (sideDrawerOpen)
    return (
      <TransitionGroup childFactory={(child) => React.cloneElement(child)}>
        <CSSTransition
          in={sideDrawerOpen}
          appear={true}
          timeout={350}
          classNames="slide"
        >
          <SideDrawerWrapper sideDrawerOpen={sideDrawerOpen}>
            <SideDrawerList>
              <SideDrawerLink href="/">Standard Gallery</SideDrawerLink>
              <SideDrawerLink href="/slideshow">
                Slideshow Gallery
              </SideDrawerLink>
              <SideDrawerLink href="/pixabayApiGallery">
                Pixabay Api Gallery
              </SideDrawerLink>
            </SideDrawerList>
          </SideDrawerWrapper>
        </CSSTransition>
      </TransitionGroup>
    );
  else return null;
};

export default SideDrawer;
