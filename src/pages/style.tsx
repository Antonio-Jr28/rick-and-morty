import styled from "styled-components";

export const WrapperHome = styled.div`
  background-color: gray;
`;

export const CardsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 120px 0 120px;
`;

export const WrapperMoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  height: 880px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 2rem 1rem;
  text-align: center;
  color: #11b1c9;
  font-size: 5rem;
  font-family: "Riick";
  &:hover {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #c9dc61;
  }
`;
