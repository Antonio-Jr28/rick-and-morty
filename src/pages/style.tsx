import styled from "styled-components";
import { Color, Padding } from "../components/obj.connstant/constant";

export const Background = styled.div`
  background-color: ${Color.gray};
`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
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

export const WrapperSearch = styled.div`
  background-color: darkgray;
  text-align: center;
  padding: 20px;

  input {
    font-size: 25px;
  }
`;
