import React from "react";

import { Title, Wrapper } from "./header.styled";
import { headerString } from "./header.string";

export const Header = () => {
  return (
    <Wrapper>
      <Title>{headerString.title}</Title>
    </Wrapper>
  );
};
