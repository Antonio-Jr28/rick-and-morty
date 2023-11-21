import { useQuery } from '@apollo/client';
import { getPageCharacter } from '../data/character-page';

export const useCharactersByPage = (page: number, limit: number) => {
  const { loading, error, data } = useQuery(getPageCharacter, {
    variables: { page, limit },
  });

  const characters = data?.characters?.results || data;

  return { loading, error, characters };
};
