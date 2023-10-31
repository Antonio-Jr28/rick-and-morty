import React from "react";

import { CardStyled } from "./card.style";
import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  image: string;
  name: string;
  loading: boolean;
}

export const Card = (props: CardProps) => {
  const navigation = useNavigate();

  const onRedirect = () => {
    navigation(`/Mais-informações/${props.id}`);
  };

  console.log(onRedirect, "ola");
  return (
    <CardStyled>
      <img src={props.image} alt="imagen" />

      <div>
        <h1>{props.name}</h1>
      </div>

      <div>
        <Button loading={props.loading} onClick={onRedirect} text="Mais informações" />
      </div>
    </CardStyled>
  );
};
