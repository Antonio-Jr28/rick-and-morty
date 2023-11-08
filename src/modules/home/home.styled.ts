import styled from "styled-components";
import { Color, Padding } from "../../components/obj.connstant";

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: ${Padding.Small};
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

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
