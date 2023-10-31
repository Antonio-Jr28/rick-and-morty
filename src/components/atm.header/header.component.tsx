import React from "react";

import { Link, Navbar, Wrapper } from "./header.styled";
import { headerString } from "./header.string";

export const Header = () => {
  const IMAGE_WIDTH = "20%";
  return (
    <Wrapper>
      <img
        alt={headerString.altImage}
        width={IMAGE_WIDTH}
        src={headerString.srcImageLogo}
      />

      <Navbar>
        <Link href="/">{headerString.home}</Link>
        <Link href="/">{headerString.Episodio}</Link>
      </Navbar>
    </Wrapper>
  );
};
