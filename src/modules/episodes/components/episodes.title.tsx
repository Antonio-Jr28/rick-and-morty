import React from "react";
import { useEpisodesContext } from "../../../context/epidodes-card.context";

export const EpidodesTitle: React.FC = () => {
    const { episodes } = useEpisodesContext();

    return <h1 className="text-white text-2xl text-center">{episodes.name}</h1>;
};