import React from "react";

// components
import DefaultNavbar from "../components/Navbar/DefaultNavbar.component";
import MovieNavbar from "../components/Navbar/MovieNavbar.component";

const MovieLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <DefaultNavbar />
        <Components {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
