import { useQuery } from '@apollo/client';
import { getEpisodes } from '../data/episodes.query';

export const useGetEpisodes = (filter: any, page: number, limit: number) => {
  const { loading, error, data } = useQuery(getEpisodes, {
    variables: { filter, page, limit },
  });

  const episodes = data?.episodes?.results || data;

  return { loading, error, episodes: episodes };
};
