import React, { useEffect, useState } from "react";

import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { CardsSection, Background, WrapperSearch } from "./style";
import { useGetCharacters } from "../domain/get-character.use-case";
import { Title } from "../components/atm.title/title.components";
import { Separator } from "../components/atm.separator";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const { characters, loading } = useGetCharacters();
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    const filtered = characters.filter((character: { name: string }) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [search, characters]);
  return (
    <Background>
      <Header />
      <Separator />
      <Title text="Personagens" />

      <WrapperSearch>
        <input
          type="text"
          placeholder="Pesquisar personagem"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </WrapperSearch>
      <Separator />
      <CardsSection>
        {filteredCharacters.map((character: Character) => (
          <Card
            loading={loading}
            id={character.id}
            key={character.id}
            image={character.image}
            name={character.name}
          />
        ))}
      </CardsSection>
      <Separator spacing="80px" />
    </Background>
  );
};
