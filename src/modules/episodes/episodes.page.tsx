import React, { useState } from "react";
import { Navbar } from "../../components/atm.navbar";
import { Title } from "../../components/atm.title/title.components";
import { EpisodesCard } from "../../components/atm.episodes-card";
import { Button } from "../../components/atm.button";

export const EpisodesPage = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);


  const toggleCardExpansion = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10" />
      <Navbar />
      <div className="mt-10" />
      <Title text="Episódios" />
      <div>
        <div className="mt-10" />
        <EpisodesCard isExpanded={isCardExpanded}>
          <div className="mt-4" />
          <h2 className="text-center">A hora da aventura</h2>
          <div className="mt-4" />
          <img
            className="w-[600px] h-[300px] shadow-lg shadow-black"
            src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
            alt="imagens"
          />

          {isCardExpanded && (
            <div className="flex flex-row justify-around mt-10">
              <p>Informação adicional 1</p>
              <p>Informação adicional 2</p>
            </div>
          )}

          <div className="mt-10" />
          
          <Button type="primary" text={!isCardExpanded ? "Mais informações" : "fechar"} onClick={toggleCardExpansion} />
        </EpisodesCard>
      </div>
      <div className="mt-10" />
    </div>
  );
};
