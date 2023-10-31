import React from "react";

import { CardStyled } from "./card.style";
import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id?: string;
  image: string;
  name: string;
}

export const Card = (props: CardProps) => {
  const navigation = useNavigate();

  const onRedirect = () => {
    navigation(`/Mais-informações/${props.id}`);
  };
  return (
    <CardStyled>
      <img src={props.image} alt="imagen" />

      <div>
        <h1>{props.name}</h1>
      </div>

      <div>
        <Button onClick={onRedirect} text="Mais informações" />
      </div>
    </CardStyled>
  );
};
