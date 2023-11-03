import { useQuery } from "@apollo/client";
import { getPageCharacter } from "../data/character-page";

export const useCharactersByPage = (page: number, pageSize: number) => {
  const { loading, error, data } = useQuery(getPageCharacter, {
    variables: { page, pageSize },
  });

  if (loading) {
    return { loading: true, error: null, characters: [] };
  }

  if (error) {
    return { loading: false, error, characters: [] };
  }

  const characters = data?.characters?.results || [];

  return { loading: false, error: null, characters };
};




