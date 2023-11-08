import { styled, css } from "styled-components";
export interface SeparatorStyledProps {
  spacing?: string;
}

export const SeparatorStyledCss = css<SeparatorStyledProps>`
  height: ${(props) => (props.spacing ? props.spacing : "20px")};
`;

export const Separator = styled.div<SeparatorStyledProps>`
  ${SeparatorStyledCss}
`;
