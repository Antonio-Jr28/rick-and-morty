import { gql } from "@apollo/client";

export const getEpisodes = gql`
  query Query($filter: FilterEpisode) {
  episodes(filter: $filter) {
    info {
      count
      pages
    }
    results {
      name
      id
      air_date
      characters {
        name
        image
        id
      }
    }
  }
}`;