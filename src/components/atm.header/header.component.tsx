import React from "react";

import { headerString } from "./header.string";
import { Link } from "react-router-dom";

export const Header = () => {
  const IMAGE_WIDTH = "20%";
  return (
    <nav>
      <img
        alt={headerString.altImage}
        width={IMAGE_WIDTH}
        src={headerString.srcImageLogo}
      />

      <div>
        <Link to="/">{headerString.home}</Link>
        <Link to="/episodios">{headerString.Episodio}</Link>
      </div>
    </nav>
  );
};
