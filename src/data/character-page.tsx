import { gql } from "@apollo/client";

export const GET_PAGE_CHARACTER = gql`
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

