import styled from "styled-components";
import { Border, Color, Padding } from "../obj.connstant/constant";

export const WrapperEpisodesCard = styled.div`
  background-color: ${Color.Turquoise};
  padding: ${Padding.Medium};
  border-radius: ${Border.Radius.Large};
  text-align: center;
  box-shadow: 6px 6px 5px rgb(1 1 1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Nova sombra ao passar o mouse */
  }
`;
