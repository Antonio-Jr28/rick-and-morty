import React from "react";
import { Header } from "../components/atm.header";
import { Card } from "../components/atm.card";
import { Wrapper } from "./style";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Card />
      </Wrapper>
    </>
  );
};
