import React from 'react';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { Product } from '../../@types/types';
import { GetServerSideProps } from 'next';

import { Main } from '../../components/Main';
import { InforProduct } from './components/InfoProduct';
import { Box, Typography } from '@mui/material';
import { convertPrice } from '../../utils';
import Image from 'next/image';
import { BackButton } from './components/BackButton';

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
        image_url
      }
    } 
    
    `);

  const product: Product = Object.values(response)[0];

  return { props: { product } };
};

export default function Page({ product }: ProductProps) {
  const numeroComPontoFinal = convertPrice(product.price_in_cents);
  return (
    <>
      <Main className="flex-col ">
        <BackButton />
        <Box className="flex gap-8">
          <Box>
            <Image src={product.image_url} width={640} height={560} />
          </Box>
          <Box className="mb-6">
            <Typography variant="h4" className="text-[#737380]">
              {product.name}
            </Typography>
            <Typography variant="h5">
              <p className="font-bold ">
                {Number(numeroComPontoFinal).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </Typography>

            <Typography className="text-[#737380] mb-6" variant="body2">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </Typography>
            <Box>
              <InforProduct product={product} />
            </Box>
          </Box>
        </Box>
      </Main>
    </>
  );
}
