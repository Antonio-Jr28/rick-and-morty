import React from "react";

import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";
import { BannerStyled } from "./banner-info.styled";

export const BannerInfo = () => {
  const navigation = useNavigate();

  const handleMore = () => {
    navigation("/");
  };
  return (
    <BannerStyled>
      <h1>Rick</h1>

      <img
        src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        alt="imagen"
      />
      <div>
        <p>Status</p>
        {/* <span>status</span> */}
        <p>Especie</p>
        {/* <span>Especie</span> */}
        <p>Gender</p>
        {/* <span>Gender</span> */}
      </div>

      <div>
        <Button onClick={handleMore} text="Voltar ao inicio" />
      </div>
    </BannerStyled>
  );
};
