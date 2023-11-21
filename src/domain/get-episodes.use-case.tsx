import { useQuery } from "@apollo/client";
import { getEpisodes } from "../data/episodes.query";

export const useGetEpisodes = (filter: any) => {
  const { loading, error, data } = useQuery(getEpisodes, {
    variables: { filter },
  });

  if (loading) {
    return { loading, error: null, episodes: [] };
  }

  if (error) {
    return { loading, error, episodes: [] };
  }

  const episodes = data?.episodes?.results || [];


  return { loading, error, episodes: episodes };
};
