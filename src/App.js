import Gallery from "./components/Gallery";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Routes from "./components/Routes";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes />
    </>
  );
}
