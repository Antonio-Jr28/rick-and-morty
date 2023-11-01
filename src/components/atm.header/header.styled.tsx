import styled from "styled-components";
import { Color, FontSize, Padding } from "../obj.connstant/constant";

export const Wrapper = styled.section`
  background-color: ${Color.Black};
  display: flex;
  align-items: center;
  padding: ${Padding.Large};
  justify-content: space-between;
  height: 100px;
`;

export const Link = styled.a`
  color:${Color.Turquoise};
  font-size: ${FontSize.Large};
  text-decoration: none;
  font-family: arial;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:  ${Color.Green};
`;

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
