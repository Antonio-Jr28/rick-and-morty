import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 120px 0 120px;
  justify-content: space-between;
  height: 100px;
`;

export const Link = styled.a`
  color: #66beab;
  font-size: 1.5rem;
  text-decoration: none;
  font-family: arial;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #c9dc61;
`;

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
