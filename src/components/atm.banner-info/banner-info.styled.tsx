import styled from "styled-components";

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9aa94b;
  padding: 15px;
  border-radius: 25px;
  text-align: center;
  width: 600px;
  box-shadow: 0 4px 30px rgb(1 1 1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Nova sombra ao passar o mouse */
  }
`;

export const SpanStyled = styled.span`
  font-size: 18px;
  font-family: "Riick";
`;

export const Wrapperinfo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 297px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
`;

export const ImageStyled = styled.img`
  border-radius: 10px;
  border: 2px solid;
`;
