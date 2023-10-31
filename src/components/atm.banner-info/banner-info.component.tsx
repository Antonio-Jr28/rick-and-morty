import React from "react";

import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";
import {
  BannerStyled,
  ImageStyled,
  SpanStyled,
  Wrapperinfo,
} from "./banner-info.styled";
import { bannerInfoString } from "./banner-info.string";

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
    <BannerStyled>
      <h1>{props.name}</h1>

      <ImageStyled
        src={props.image}
        alt={bannerInfoString.altImage}
      ></ImageStyled>

      <Wrapperinfo>
        <p>{bannerInfoString.status}</p>
        <SpanStyled>{props.status}</SpanStyled>
        <p>{bannerInfoString.species}</p>
        <SpanStyled>{props.species}</SpanStyled>
        <p>{bannerInfoString.gender}</p>
        <SpanStyled>{props.gender}</SpanStyled>
      </Wrapperinfo>

      <div>
        <Button
          onClick={handleMore}
          loading={props.loading}
          text={bannerInfoString.button}
        />
      </div>
    </BannerStyled>
  );
};
