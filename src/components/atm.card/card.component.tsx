import React from "react";

import { CardStyled } from "./card.style";
import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigation = useNavigate();

  const handleMore = () => {
    navigation("/Mais-informações");
  }
  return (
    <CardStyled>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        alt="imagen"
      />

      <div>
        <h1>Rick</h1>
        <p>Status</p>
        {/* <span>status</span> */}
      </div>

      <div>
        <Button onClick={handleMore} text="Mais informações" />
      </div>
    </CardStyled>
  );
};
