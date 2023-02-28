import React from "react";

// components
import DefaultNavbar from "../components/Navbar/DefaultNavbar.component";
import Navbar from "../components/Navbar/Navbar.component";

const DefaultLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <DefaultNavbar />
        <Components {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
