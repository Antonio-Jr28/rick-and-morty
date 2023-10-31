import { useQuery } from "@apollo/client";
import { getInfoCharacter } from "../data/character-info.query";

export const useCharacterData = async (characterId: string) => {
  const { loading, error, data } = useQuery(getInfoCharacter, {
    variables: { characterId },
  });

  if (loading) return { loading: true };
  if (error) return { error: error.message };

  const character = data?.character;

  return { characterData: character };
};
