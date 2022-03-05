import { gql } from "@apollo/client";

export const ADD_LINK = gql`
  mutation AddLink($text: String!) {
    addLink(url: $url, slug: $slug) {
      id
      url
      slug
    }
  }
`;
