import React, { useEffect, useState } from "react";
import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { CardsSection, Background, WrapperSearch } from "./style";
import { Title } from "../components/atm.title/title.components";
import { Separator } from "../components/atm.separator";
import { Button } from "../components/atm.button";
import { useCustomCharactersByPage } from "../domain/get-character-page.use-case";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); 
  const pageSize = 30;

  const { characters, loading } = useCustomCharactersByPage(
    page,
    pageSize
  );

  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    const filtered = characters.filter((character: Character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [search, characters]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

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

      <div>
        <Button text="Anterior" onClick={handlePreviousPage} />
        <Button text="Próxima" onClick={handleNextPage} />
      </div>

      <Separator spacing="80px" />
    </Background>
  );
};
