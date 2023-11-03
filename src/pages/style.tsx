import styled from "styled-components";
import { Color, Padding } from "../components/obj.connstant/constant";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #272929,
    #50298ce3,
    #15053c,
    #330654
  );
`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: ${Padding.Small};
`;

export const WrapperMoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperSearch = styled.div`
  text-align: center;
  padding: 10px;

  input {
    all: unset;
    color: ${Color.Black};
    padding: 1rem;
    border: 1px solid ${Color.Blue};
    border-radius: 10px;
    transition: 150ms cubic-bezier(0.81, 0.18, 0, 0.82);
  }

  input:focus {
    border: 4px solid ${Color.Green};
    color: ${Color.Green};
  }
`;
