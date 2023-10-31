import React from "react";

import { CardStyled } from "./card.style";
import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";
import { cardString } from "./card.string";

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

  return (
    <CardStyled>
      <img src={props.image} alt={cardString.altImage} />

      <div>
        <h1>{props.name}</h1>
      </div>

      <div>
        <Button
          loading={props.loading}
          onClick={onRedirect}
          text={cardString.button}
        />
      </div>
    </CardStyled>
  );
};
