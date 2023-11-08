import styled, { css } from "styled-components";
import { Border, FontSize } from "../obj.connstant";

export type VariantTypes = "primary" | "callToAction";
interface ButtonColor {
  bg: string;
  border: string;
  text: string;
}

const btnColors = (
  variant: VariantTypes
): {
  hover: ButtonColor;
  selected: ButtonColor;
  default: ButtonColor;
} => {
  const solidColors = {
    primary: {
      default: { bg: "#50298ce3", border: "#15053c", text: "#11b1c9" },
      hover: {
        bg: "Black",
        border: "white",
        text: "#11b1c9",
      },
      selected: {
        bg: "transparent",
        border: "#000000",
        text: "FFFFFF",
      },
    },
    callToAction: {
      default: { bg: "#c9dc61", border: "black", text: "#000000" },
      hover: {
        bg: "#c9dc61",
        border: "#000000",
        text: "#11b1c9",
      },
      selected: {
        bg: "#11b1c9",
        border: "#FFFFFF",
        text: "#000000",
      },
    },
  };

  return solidColors[variant];
};

interface ButtonStyledProps {
  color?: string;
  variant: VariantTypes;
}

export const ButtonStyledCss = css<ButtonStyledProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.variant
      ? btnColors(props.variant).default.bg
      : btnColors(props.variant)};
  font-size: ${FontSize.Small};
  border-radius: ${Border.Radius.Small};
  border-color: ${(props) =>
    props.variant
      ? btnColors(props.variant).default.border
      : btnColors(props.variant)};
  color: ${(props) =>
    props.variant
      ? btnColors(props.variant).default.text
      : btnColors(props.variant)};
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) => btnColors(props.variant).hover.bg};
    color: ${(props) => btnColors(props.variant).hover.text};
  }

  &:active {
    color: ${(props) => btnColors(props.variant).selected.text};
    background-color: ${(props) => btnColors(props.variant).selected.bg};
    border-color: ${(props) => btnColors(props.variant).selected.border};
  }
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${ButtonStyledCss}
`;
