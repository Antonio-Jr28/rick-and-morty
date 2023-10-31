import { gql } from "@apollo/client";

export const getCharacter = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
      name
      id
      image
      species
      status
      gender
    }
  }
`;
