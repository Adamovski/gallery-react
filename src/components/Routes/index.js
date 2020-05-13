import React from "react";

import { Switch, Route } from "react-router-dom";
import Gallery from "../Gallery";
import MainImageModal from "../MainImageModal";

{
  /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
}

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users"></Route>
    <Route path="/">
      <Gallery />
    </Route>
  </Switch>
);

function About() {
  return <MainImageModal />;
}

function Users() {
  return <h2>Users</h2>;
}

export default Routes;
