import { PropsWithChildren } from 'react';
import { Card } from '../../../components/atm.episodes-card';

import { EpisodesContext, EpisodesData } from '../../../context/epidodes-card.context';

export const EpisodesCards: React.FC<PropsWithChildren<{ episodes: EpisodesData }>> = ({ children, episodes }) => {
  return (
    <Card>
      <EpisodesContext.Provider value={{ episodes }}>
        <div>{children}</div>
      </EpisodesContext.Provider>
    </Card>
  );
};
