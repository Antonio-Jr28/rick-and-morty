import styled from "styled-components";
import { Color, FontFamily, FontSize } from "../obj.connstant/constant";

export const TitleStyled = styled.h1`
  margin: 0;
  text-align: center;
  color: ${Color.Blue};
  font-size: ${FontSize.XLarge};
  font-family: ${FontFamily.Primary};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${Color.Green};
`;
