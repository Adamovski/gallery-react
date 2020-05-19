import React, { useState } from "react";
import SideDrawer from "./SideDrawer/SideDrawer";
import SideDrawerToggleButton from "./SideDrawer/SideDrawerToggleButton";
import Backdrop from "./Backdrop/Backdrop";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Toolbar = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  background-color: #f8f8f8;
`;

const ToolbarNavigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  .toolbar-toggle-button {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const ToolbarNavigationItems = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  a {
    text-decoration: none;
    padding: 0 0.5rem;
    color: #143774;
  }
  &:hover.&:active {
    color: #fa923f;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ToolbarLogo = styled.div`
  justify-self: flex-end;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #143774;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    margin-left: 0;
  }
`;

const Navigation = () => {
  const [SideDrawerOpen, setSideDrawerOpen] = useState(false);
  // toggle menu in mobile
  const sideDrawerToggleClickHandler = () => {
    setSideDrawerOpen(!SideDrawerOpen);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <>
      <Toolbar>
        <ToolbarNavigation>
          <div className="toolbar-toggle-button">
            <SideDrawerToggleButton click={sideDrawerToggleClickHandler} />
          </div>
          <ToolbarLogo>
            <Link to="/">Gallery</Link>
          </ToolbarLogo>
          <Spacer></Spacer>
          <ToolbarNavigationItems>
            <ul>
              <li>
                <Link to="/">Standard Gallery</Link>
              </li>
              <li>
                <Link to="/slideshow">Slideshow Gallery</Link>
              </li>
              <li>
                <Link to="/pixabayApiGallery">Pixabay Api Gallery</Link>
              </li>
            </ul>
          </ToolbarNavigationItems>
        </ToolbarNavigation>
      </Toolbar>
      <SideDrawer sideDrawerOpen={SideDrawerOpen} />
      <Backdrop isVisible={SideDrawerOpen} click={backdropClickHandler} />
    </>
  );
};

export default Navigation;
