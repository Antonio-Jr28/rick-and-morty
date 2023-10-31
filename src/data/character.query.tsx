import { gql } from "@apollo/client";

export const getAllCharacter = gql`
  query GetAllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
