import React from "react";
import { useEpisodesContext } from "../../../context/epidodes-card.context";

export const EpidodesTitle: React.FC = () => {
    const { episodes } = useEpisodesContext();

    return <h1 className="text-black text-3xl text-center">{episodes?.name}</h1>;
};