import { useQuery } from "@apollo/client";
import { getPageCharacter } from "../data/character-page";

export const useCharactersByPage = (page: number, limit: number) => {
  const { loading, error, data } = useQuery(getPageCharacter, {
    variables: { page, limit },
  });

  if (loading) {
    return { loading, error: null, characters: [] };
  }

  if (error) {
    return { loading, error, characters: [] };
  }

  const characters = data?.characters?.results || [];

  return { loading, error: null, characters };
};




