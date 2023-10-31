import React from "react";
import { Header } from "../components/atm.header";
import { Wrapper } from "./style";
import { BannerInfo } from "../components/atm.banner-info";

export const MoreInfoPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <BannerInfo />
      </Wrapper>
    </>
  );
};
