import React from "react";
import { Header } from "../../components/atm.header";
import { Title } from "../../components/atm.title/title.components";
import { FiltroLista } from "../../components/atm.episodes-card/episodes-card.component";

export const EpisodesPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title text="Episódios" />
        <FiltroLista />
      </div>
    </div>
  );
};
