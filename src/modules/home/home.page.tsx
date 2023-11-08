import React, { useEffect, useState } from "react";

import { Header } from "../../components/atm.header";
import { Background } from "../style";
import { Title } from "../../components/atm.title/title.components";
import { Separator } from "../../components/atm.separator";
import { Button } from "../../components/atm.button";
import { useCharactersByPage } from "../../domain/get-character-page.use-case";
import { useNavigate } from "react-router-dom";
import { CardsSection, WrapperButton, WrapperSearch } from "./home.styled";
import { homeStrings } from "./home.strings";
import { CharactersCard } from "./components/characters-card";
import { CardTitle } from "./components/card-title";
import { CardImage } from "./components/card-image";

interface Character {
  id: string;
  image: string;
  name: string;
}

export const HomePage = () => {
  const navigation = useNavigate();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 30;

  const { characters, loading } = useCharactersByPage(page, limit);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    const filtered = characters.filter((character: Character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [search, characters]);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onRedirect = (id: string) => {
    navigation(`/mais-informações/${id}`);
  };

  return (
    <Background>
      <Header />

      <Separator />

      <Title text={homeStrings.title} />

      <WrapperSearch>
        <input
          type="text"
          placeholder={homeStrings.inputSearch.placdholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </WrapperSearch>

      <Separator />

      <CardsSection>
        {filteredCharacters.map((character: Character) => (
          <CharactersCard
            key={character.id}
            card={{ img: character.image, name: character.name }}
          >
            <CardImage />
            <CardTitle />
            <Button
              loading={loading}
              variant="primary"
              onClick={() => onRedirect(character.id)}
              text={homeStrings.InfoButton}
            />
          </CharactersCard>
        ))}
      </CardsSection>

      <Separator />

      <WrapperButton>
        <Button
          variant="callToAction"
          text={homeStrings.previousButton}
          onClick={handlePreviousPage}
        />
        <Button
          variant="callToAction"
          text={homeStrings.nextButton}
          onClick={handleNextPage}
        />
      </WrapperButton>

      <Separator spacing="80px" />
    </Background>
  );
};
