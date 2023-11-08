import React from "react";

import { CardStyled } from "./card.style";

export const CardWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};
