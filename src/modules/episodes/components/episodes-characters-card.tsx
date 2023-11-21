import React from 'react';
import { useEpisodesContext } from '../../../context/epidodes-card.context';

export const EpisodesCharactersCard: React.FC = () => {
  const { episodes } = useEpisodesContext();

  return (
    <div className='flex flex-wrap gap-5 w-[500px] justify-center'>
      {episodes?.characters?.length > 0 ? (
        episodes.characters.map((character) => (
          <div key={character?.id}>
            <img className='rounded-full w-20 h-20 ' src={character.image} alt='Personagem' />
          </div>
        ))
      ) : (
        <p>Nenhum personagem disponível.</p>
      )}
    </div>
  );
};
