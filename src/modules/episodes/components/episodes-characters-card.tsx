import React from 'react';
import { useEpisodesContext } from '../../../context/epidodes-card.context';

export const EpisodesCharactersCard: React.FC = () => {
  const { episodes } = useEpisodesContext();

  return (
    <div className='flex w-[500px] flex-wrap justify-center gap-5'>
      {episodes?.characters?.length > 0 ? (
        episodes.characters.map((character) => (
          <div key={character?.id}>
            <img className='h-20 w-20 rounded-full ' src={character.image} alt='Personagem' />
          </div>
        ))
      ) : (
        <p>Nenhum personagem disponível.</p>
      )}
    </div>
  );
};
