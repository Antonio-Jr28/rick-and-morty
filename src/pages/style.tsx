import styled from "styled-components";
import { Color, Padding } from "../components/obj.connstant/constant";

export const Background = styled.div`
  background-color: ${Color.gray};
`;

export const CardsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: ${Padding.Large};
`;

export const WrapperMoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Color.gray};
  height: 880px;
`;
