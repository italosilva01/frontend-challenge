import React from 'react';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { Product } from '../../@types/types';
import { GetServerSideProps } from 'next';

import { Main } from '../../components/Main';
import { InforProduct } from './components/InfoProduct';
import { Box } from '@mui/material';

interface ProductProps {
  product: Product;
}

interface ResponseProps {
  data: ProductProps;
}

export const getServerSideProps: GetServerSideProps<{
  product: Product;
}> = async (context) => {
  const id = context.params?.id as string;
  const response: ProductProps = await grapQLClient.request(gql`
    query{
      Product(id:"${id}") {
        id
        name
        price_in_cents
        description
      }
    } 
    
    `);

  const product: Product = Object.values(response)[0];

  return { props: { product } };
};

export default function Page({ product }: ProductProps) {
  return (
    <>
      <Main>
        <Box>
          <p>{product.name}</p>
        </Box>

        <Box>
          <InforProduct />
        </Box>
      </Main>
    </>
  );
}
