import { useQuery } from "@apollo/client";
import { getInfoCharacter } from "../data/character-info.query";

export const useCharacterData = (characterId: string | undefined) => {
  const { loading, error, data } = useQuery(getInfoCharacter, {
    variables: { characterId },
  });

  return { loading, error, characterData: data?.character };
};
