import { gql } from '@apollo/client';

export const getPageCharacter = gql`
  query getPageCharacter($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        image
        name
        species
      }
    }
  }
`;
