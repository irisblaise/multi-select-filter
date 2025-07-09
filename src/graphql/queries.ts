import { gql } from 'graphql-request';

export const GET_CATEGORIES = gql`
  query GetCategories {
    items
  }
`;
