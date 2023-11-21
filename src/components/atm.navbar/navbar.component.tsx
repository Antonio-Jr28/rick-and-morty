import React from "react";

import { navbarString } from "./navbar.string";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const IMAGE_WIDTH = "20%";
  return (
    <nav className="sticky top-0 w-full h-32 m-auto bg-violet-900 shadow-md px-8 flex items-center justify-around gap-4">
      <img
        alt={navbarString.altImage}
        width={IMAGE_WIDTH}
        src={navbarString.srcImageLogo}
      />

      <div className="flex items-center gap-20 text-white text-2xl">
        <Link to="/">{navbarString.home}</Link>
        <Link to="/personagens">{navbarString.personagens}</Link>
        <Link to="/episodios">{navbarString.episodio}</Link>
      </div>
    </nav>
  );
};
