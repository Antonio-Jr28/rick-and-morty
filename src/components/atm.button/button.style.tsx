import styled, { css } from "styled-components";
import { Border, Color, FontSize } from "../obj.connstant/constant";

interface ButtonStyledProps {
  color?: string;
}

export const ButtonStyledCss = css<ButtonStyledProps>`
  cursor: pointer;
  background: transparent;
  font-size: ${FontSize.Small};
  border-radius: ${Border.Radius.Small};
  border: ${Border.Width.Small} solid ${Color.Green};
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${Color.Black};
    color: ${(props) => (props.color ? props.color : Color.Green)};
  }
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${ButtonStyledCss}
`;
