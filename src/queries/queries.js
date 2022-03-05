import { gql } from "@apollo/client";

export const LINKS = gql`
  query GetLinks {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
