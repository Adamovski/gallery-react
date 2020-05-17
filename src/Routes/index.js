import React from "react";

import { Switch, Route } from "react-router-dom";
import Gallery from "../Gallery";
import ThumbnailSlides from "../ThumbnailSlides";
import PixabayGallery from "../Pixabay_Api_Gallery/Pixabay";

{
  /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
}

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/pixa">
      <PixabayGallery />
    </Route>
    <Route path="/">
      <Gallery />
    </Route>
  </Switch>
);

function About() {
  return <ThumbnailSlides />;
}

export default Routes;
