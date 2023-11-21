import React from 'react';

import { useCardContext } from '../../../context/card.context';

export const CardSpecies: React.FC = () => {
  const { card } = useCardContext();

  return <h5 className='p-2 text-center text-2xl text-white'>{card.species}</h5>;
};
