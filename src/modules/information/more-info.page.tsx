import React from "react";
import { Header } from "../../components/atm.header";
import { BannerInfo } from "../../components/atm.banner-info";
import { useCharacterData } from "../../domain/get-character-info.use-case";
import { useParams } from "react-router-dom";
import { Title } from "../../components/atm.title/title.components";
import { moreInfoString } from "./more-info.string";

export const MoreInfoPage = () => {
  const { id } = useParams();
  const { loading, characterData } = useCharacterData(id);

  return (
    <div>
      <Header />

      <Title text={moreInfoString.title} />
      <div>

        <BannerInfo
          loading={loading}
          name={characterData?.name}
          gender={characterData?.gender}
          species={characterData?.species}
          image={characterData?.image}
          status={characterData?.status}
        />

      </div>
    </div>
  );
};
