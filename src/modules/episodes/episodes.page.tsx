import React from "react";
import { Navbar } from "../../components/atm.navbar";
import { Title } from "../../components/atm.title/title.components";
import { Button } from "../../components/atm.button";
import { EpisodesCards } from "./components/episodes-card";
import { EpidodesTitle } from "./components/episodes.title";
import { EpisodesAirDate } from "./components/episodes.data";

export const EpisodesPage = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10" />
      <Navbar />
      <div className="mt-10" />
      <Title text="Episódios" />
      <div>
        <div className="mt-10" />
      <EpisodesCards key="1" episodes={{id: "1", name: "rick", airDate: "1010"}}>
       
          <div className="mt-4" />
        <EpidodesTitle />
          <div className="mt-4" />
         <EpisodesAirDate />
         
          <div className="mt-10" />
          
      </EpisodesCards>
      </div>
      <div className="mt-10" />
    </div>
  );
};
