import { gql } from 'graphql-request';

import { grapQLClient } from './graphiqlClient';
import { useQuery } from '@tanstack/react-query';

export const fetchGraphQL = (query: string, variables?: Record<string,any>) => {
  const response = await grapQLClient.request(gql`
  return useQuery(query, async () => {
    const { getAllProducts } = await grapQLClient.request(gql`
      query {
        allProducts {
          image_url
          name
        }
      }
    `);
    return getAllProducts;
  });
};
