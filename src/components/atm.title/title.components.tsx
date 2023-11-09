import React from "react";

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  return <h1>{props.text}</h1>;
};
