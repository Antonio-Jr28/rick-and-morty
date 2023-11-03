import { useQuery } from "@apollo/client";
import { GET_PAGE_CHARACTER } from "../data/character-page";

export const useCustomCharactersByPage = (page: number, pageSize: number) => {
  const { loading, error, data } = useQuery(GET_PAGE_CHARACTER, {
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




