import React from "react";
import { useEpisodesContext } from "../../../context/epidodes-card.context";

export const EpisodesAirDate: React.FC = () => {
    const { episodes } = useEpisodesContext();

    return <h3 className="text-black text-3xl text-center">{episodes?.air_date}</h3>;
};