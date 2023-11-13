import React from "react";
import { useEpisodesContext } from "../../../context/epidodes-card.context";

export const EpisodesCharactersCard: React.FC = () => {
  const { episodes } = useEpisodesContext();
  
  return (
    <div>
      {episodes?.characters?.length > 0 ? (
        episodes.characters.map((character) => (
          <div key={character?.id}>
            <img className="rounded-full	" src={character.image} alt="Personagem" />
            <p>{character.name}</p>
          </div>
        ))
      ) : (
        <p>Nenhum personagem disponível.</p>
      )}
    </div>
  );
};
