import { gql } from "@apollo/client";

export const getInfoCharacter = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
      gender
      image
      name
      species
      status
      id
    }
  }
`;
