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
    navigation("/personagens");
  };
  return (
    <div className="flex flex-row justify-around w-[650px] items-center gap-10 border-4 border-emerald-300 shadow-lg shadow-slate-900 px-8 py-8 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex flex-col items-center">
        <img
          className="w-40 h-40 rounded-full"
          src={props.image}
          alt={bannerInfoString.altImage}
        ></img>
        <div className="mt-6" />
        <h1 className="text-center text-white text-4xl">{props.name}</h1>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-emerald-300 text-2xl">Informações</h2>
        <div className="mt-6" />
        <p className="text-white">
          {bannerInfoString.status}
          {props.status}
        </p>
        <div className="mt-3" />
        <p className="text-white">
          {bannerInfoString.species}
          {props.species}
        </p>
        <div className="mt-3" />
        <p className="text-white">
          {bannerInfoString.gender}
          {props.gender}
        </p>

        <div className="mt-8" />

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
