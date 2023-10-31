import React from "react";
import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { Wrapper } from "./style";
import { useGetCharacters } from "../domain/get-character.use-case";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const { characters } = useGetCharacters();

  return (
    <>
      <Header />
      <Wrapper>
        {characters.map((character: Character) => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
          />
        ))}
      </Wrapper>
    </>
  );
};
