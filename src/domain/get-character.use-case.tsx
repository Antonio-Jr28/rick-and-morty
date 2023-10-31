import { useQuery } from "@apollo/client";
import { getAllCharacter } from "../data/character.query";

export const useGetCharacters = () => {
  const { data, loading, error } = useQuery(getAllCharacter);

  if (loading) {
    return { loading: true, characters: [] };
  }

  if (error || !data) {
    return { loading: false, characters: [], error: "Dados não encontrados" };
  }

  const characters = data?.characters?.results;

  return { loading: false, characters };
};
