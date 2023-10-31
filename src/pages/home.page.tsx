import React from "react";
import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { CardsSection, Background } from "./style";
import { useGetCharacters } from "../domain/get-character.use-case";
import { Title } from "../components/atm.title/title.components";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const { characters, loading } = useGetCharacters();

  return (
    <Background>
      <Header />
      <Title text="Personagens" />
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
    </Background>
  );
};
