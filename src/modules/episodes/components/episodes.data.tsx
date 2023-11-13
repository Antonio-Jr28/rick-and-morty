import React from "react";
import { useEpisodesContext } from "../../../context/epidodes-card.context";

export const EpisodesAirDate: React.FC = () => {
    const { episodes } = useEpisodesContext();

    return <h3 className="text-white text-2xl text-center">{episodes.airDate}</h3>;
};