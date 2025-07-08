import { gql } from 'graphql-request';

export const GET_ITEMS = gql`
  query GetItems {
    items
  }
`;
