import React from "react";
import { Switch, Route } from "react-router-dom";
import PixabayGallery from "../components/Pixabay_Api_Gallery";
import Gallery from "../components/Gallery";
import ThumbnailSlides from "../components/ThumbnailSlides";

{
  /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
}

const Routes = () => (
  <Switch>
    <Route path="/slideshow">
      <ThumbnailSlides />
    </Route>
    <Route path="/pixabayApiGallery">
      <PixabayGallery />
    </Route>
    <Route path="/">
      <Gallery />
    </Route>
  </Switch>
);

export default Routes;
