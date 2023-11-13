import React from "react";

export interface Episodes {
    name: string;
      id: string;
      airDate: string;
      characters?: {};
}

export const EpisodesContext = React.createContext<{ episodes: Episodes } | null>(null);

export const useEpisodesContext = () => {
    const context = React.useContext(EpisodesContext);
    if (!context) {
        throw new Error("EpisodesContext must bu used inside Episodes");
    }
    return context;
};