import styled from "styled-components";

export const CardStyled = styled.div`
  background: #66beab;
  padding: 15px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 6px 6px 5px rgb(1 1 1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Nova sombra ao passar o mouse */
  }
`;

