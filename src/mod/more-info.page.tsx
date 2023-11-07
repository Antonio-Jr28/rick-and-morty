import React from "react";
import { Header } from "../components/atm.header";
import { BannerInfo } from "../components/atm.banner-info";
import { useCharacterData } from "../domain/get-character-info.use-case";
import { useParams } from "react-router-dom";
import { Title } from "../components/atm.title/title.components";
import { Separator } from "../components/atm.separator";
import { Background } from "../modules/style";
import { WrapperMoreInfo } from "../modules/information/more-info.style";

export const MoreInfoPage = () => {
  const { id } = useParams();
  const { loading, characterData } = useCharacterData(id);

  return (
    <Background>
      <Header />
      <Separator />
      <Title text="Detalhes dos Personagens" />
      <WrapperMoreInfo>
        <Separator />
        <BannerInfo
          loading={loading}
          name={characterData?.name}
          gender={characterData?.gender}
          species={characterData?.species}
          image={characterData?.image}
          status={characterData?.status}
        />
        <Separator />
      </WrapperMoreInfo>
    </Background>
  );
};
