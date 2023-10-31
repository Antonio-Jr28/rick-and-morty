import React from "react";

import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";
import { BannerStyled, SpanStyled, Wrapperinfo } from "./banner-info.styled";
import { bannerInfoString } from "./banner-info.string";
import { loadavg } from "os";

interface BannerInfoProps {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  loading: boolean;
}

export const BannerInfo = (props: BannerInfoProps) => {
  const navigation = useNavigate();

  const handleMore = () => {
    navigation("/");
  };
  return (
    <div>
      <h1>{props.name}</h1>

      <img src={props.image} alt={bannerInfoString.altImage}></img>
      <div>
        <p>{bannerInfoString.status}</p>
        <SpanStyled>{props.status}</SpanStyled>
        <p>{bannerInfoString.species}</p>
        <SpanStyled>{props.species}</SpanStyled>
        <p>{bannerInfoString.gender}</p>
        <SpanStyled>{props.gender}</SpanStyled>
      </div>

      <div>
        <Button
          onClick={handleMore}
          loading={props.loading}
          text={bannerInfoString.button}
        />
      </div>
    </div>
  );
};
