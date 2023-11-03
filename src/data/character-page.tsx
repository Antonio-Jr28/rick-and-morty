import { gql } from "@apollo/client";

export const getPageCharacter = gql`
  query GET_PAGE_CHARACTER($page: Int!) {
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
      }
    }
  }
`;
