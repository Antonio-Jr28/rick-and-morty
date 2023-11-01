import styled from "styled-components";
import { Border, Color, FontSize } from "../obj.connstant/constant";

export const Buttonstyled = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: ${FontSize.Small};
  border-radius: ${Border.Radius.Small};
  border: ${Border.Width.Small} solid ${Color.Green};
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${Color.Black};
    color: ${Color.Green};
  }
`;
