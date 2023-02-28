import React from "react";
import { Link, useLocation } from "react-router-dom";

const DefaultNavbar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="hidden md:block bg-darkBackground-800 px-24 lg:px-32 py-3">
        <Link
          to="/plays"
          className={
            location.pathname.includes("plays")
              ? "text-white font-medium cursor-pointer"
              : "text-gray-400 cursor-pointer hover:text-white"
          }
        >
          Plays
        </Link>
      </nav>
    </>
  );
};

export default DefaultNavbar;
