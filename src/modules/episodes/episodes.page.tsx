import React, { useState } from "react";
import { Navbar } from "../../components/atm.navbar";
import { Title } from "../../components/atm.title/title.components";
import { EpisodesCards } from "./components/episodes-card";
import { EpidodesTitle } from "./components/episodes.title";
import { EpisodesAirDate } from "./components/episodes.data";
import { useGetEpisodes } from "../../domain/get-episodes.use-case";
import { Button } from "../../components/atm.button";
import { Episodes } from "../../context/epidodes-card.context";

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: "" });
  const limit = 30;

  const { episodes } = useGetEpisodes(filter, page, limit);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  console.log(episodes, "merda");
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10" />
      <Navbar />
      <div className="mt-10" />
      <Title text="Episódios" />

      <div>
        <div className="mt-10" />

        {episodes?.map((episode: Episodes) => (
          <div key={episode.id}>
            <EpisodesCards
              episodes={{
                id: episode?.id,
                name: episode?.name,
                air_date: episode?.air_date,
              }}
            >
              <div className="mt-4" />
              
              <EpidodesTitle />

              <div className="mt-4" />
              
              <EpisodesAirDate />
              
              <div className="mt-10" />
            </EpisodesCards>
          </div>
        ))}

        <div className="flex flex-row items-center gap-4 py-6">
          <Button type="secondary" text="Anterior" onClick={handlePreviousPage} />
          <Button type="secondary" text="Próximo" onClick={handleNextPage} />
        </div>
      </div>
      <div className="mt-10" />
    </div>
  );
};
