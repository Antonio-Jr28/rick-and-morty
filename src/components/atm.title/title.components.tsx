import React from "react";

import { TitleStyled } from "./tile.style";

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  return <TitleStyled>{props.text}</TitleStyled>;
};
