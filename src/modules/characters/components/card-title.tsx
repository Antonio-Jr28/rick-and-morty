import React from 'react';

import { useCardContext } from '../../../context/card.context';

export const CardTitle: React.FC = () => {
  const { card } = useCardContext();

  return <h3 className='p-2 text-center text-2xl text-white'>{card.name}</h3>;
};
