import React from "react";
import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { Title, CardsSection, WrapperHome } from "./style";
import { useGetCharacters } from "../domain/get-character.use-case";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const { characters, loading } = useGetCharacters();

  return (
    <WrapperHome>
      <Header />
      <Title>Personagens</Title>
      <CardsSection>
        {characters.map((character: Character) => (
          <Card
            loading={loading}
            id={character.id}
            key={character.id}
            image={character.image}
            name={character.name}
          />
        ))}
      </CardsSection>
    </WrapperHome>
  );
};
