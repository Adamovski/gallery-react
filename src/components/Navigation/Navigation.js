import React, { useState } from "react";
import "./Navigation.css";
import SideDrawer from "../SideDrawer/SideDrawer";
import SideDrawerToggleButton from "../SideDrawer/SideDrawerToggleButton";
import Backdrop from "../Backdrop/Backdrop";
import { Router, Switch, Route, Link } from "react-router-dom";

const Navigation = () => {
  const [SideDrawerOpen, setSideDrawerOpen] = useState(false);

  // toggle menu in mobile
  const sideDrawerToggleClickHandler = () => {
    setSideDrawerOpen(!SideDrawerOpen);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (SideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div className="toolbar-toggle-button">
            <SideDrawerToggleButton click={sideDrawerToggleClickHandler} />
          </div>
          <div className="toolbar-logo">
            <Link to="/">Gallery</Link>
          </div>
          <div className="spacer"></div>
          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDrawer show={SideDrawerOpen} />
      {backdrop}
    </>
  );
};

export default Navigation;
