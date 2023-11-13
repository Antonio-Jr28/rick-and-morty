import React from "react";


interface characters {
  name: string;
  image: string;
  id: number | undefined;
}

export interface EpisodesData {
  id: number;
  name: string;
  air_date: string;
  characters: characters[];

}

export const EpisodesContext = React.createContext<{ episodes: EpisodesData } | null>(null);

export const useEpisodesContext = (): { episodes: EpisodesData } => {
  const context = React.useContext(EpisodesContext);

  if (!context) {
    throw new Error("EpisodesContext must be used inside Episodes");
  }

  return context;
};
