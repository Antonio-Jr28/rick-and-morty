import React from "react";

import { Button } from "../atm.button";
import { useNavigate } from "react-router-dom";
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
    <div>
      <h1>{props.name}</h1>

      <img src={props.image} alt={bannerInfoString.altImage}></img>

      <div>
        <p>{bannerInfoString.status}</p>
        <span>{props.status}</span>
        <p>{bannerInfoString.species}</p>
        <span>{props.species}</span>
        <p>{bannerInfoString.gender}</p>
        <span>{props.gender}</span>
      </div>

      <div>
        <Button
          type="secondary"
          onClick={handleMore}
          loading={props.loading}
          text={bannerInfoString.button}
        />
      </div>
    </div>
  );
};
