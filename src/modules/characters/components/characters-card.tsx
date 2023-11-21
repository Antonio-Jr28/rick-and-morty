import React from 'react';

import { PropsWithChildren } from 'react';
import { CardWrapper } from '../../../components/atm.card';

import { CardContext, Card } from '../../../context/card.context';

export const CharactersCard: React.FC<PropsWithChildren<{ card: Card }>> = ({ children, card }) => {
  return (
    <CardWrapper>
      <CardContext.Provider value={{ card }}>
        <div>{children}</div>
      </CardContext.Provider>
    </CardWrapper>
  );
};
