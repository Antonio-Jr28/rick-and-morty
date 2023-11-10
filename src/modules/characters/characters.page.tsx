import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/atm.navbar";
import { Title } from "../../components/atm.title/title.components";
import { Button } from "../../components/atm.button";
import { useCharactersByPage } from "../../domain/get-character-page.use-case";
import { charactersStrings } from "./characters.strings";
import { CharactersCard } from "./components/characters-card";
import { CardTitle } from "./components/card-title";
import { CardImage } from "./components/card-image";
import { FiSearch } from "react-icons/fi";
import { CardSpecies } from "./components/card-species";
import { useNavigate } from "react-router";

interface Character {
  id: string;
  image: string;
  name: string;
  species: string;
}

export const CharactersPage = () => {
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
    <div className="flex flex-col items-center bg-slate-200">
      <Navbar />
      <div className="mt-10" />
      <Title text={charactersStrings.title} />
      <div className="mt-10" />

      <div className="flex gap-2 flex-row px-4 py-4 w-[400px] rounded-lg items-center border-2 border-black">
        <FiSearch className="text-gray-500 ml-2" />

        <input
          className="bg-slate-200 focus:outline-none"
          type="text"
          placeholder={charactersStrings.inputSearch.placdholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center shadow-xl gap-6 p-6">
        {filteredCharacters.map((character: Character) => (
          <CharactersCard
            key={character.id}
            card={{
              img: character.image,
              name: character.name,
              species: character.species,
            }}
          >
            <CardImage />
            <CardTitle />
            <CardSpecies />
            <Button
              type="primary"
              loading={loading}
              onClick={() => onRedirect(character.id)}
              text={charactersStrings.InfoButton}
            />
          </CharactersCard>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4 py-6">
        <Button
          type="secondary"
          text={charactersStrings.previousButton}
          onClick={handlePreviousPage}
        />
        <Button
          type="secondary"
          text={charactersStrings.nextButton}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};
