import React from 'react';

import { useCardContext } from '../../../context/card.context';

export const CardImage: React.FC = (): JSX.Element => {
  const { card } = useCardContext();

  return <img className='rounded-full' src={card.img} alt='cards dos personagens' />;
};
