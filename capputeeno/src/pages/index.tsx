import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { gql } from 'graphql-request';

import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Product } from '../@types/types';
import { grapQLClient } from '../services/graphiqlClient';
import { AllProducts } from '../components/Content/AllProducts';
import { PaginationStyled } from '../components/PaginationStyled';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigation } from '../context/NavigationContext';
import { useRequestGraphQl } from '../hooks/request';

const Home: NextPage = (props) => {
  const { page } = useNavigation();
  const { handlePagined } = useRequestGraphQl();

  return (
    <div className=" h-[100%] ">
      <Head>
        <title>Capputeeno | Home</title>
      </Head>
      <main className=" w-[90%]  m-auto  overflow-auto">
        <Content>
          <ContainerPagination>
            <PaginationStyled
              handlePagination={handlePagined}
              currentPage={page}
            />
          </ContainerPagination>
          <AllProducts initProducts={props} />
          <ContainerPagination>
            <PaginationStyled
              handlePagination={handlePagined}
              currentPage={page}
            />
          </ContainerPagination>
        </Content>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { allProducts } = await grapQLClient.request(gql`
    query {
      allProducts(page: 1, perPage: 12) {
        image_url
        name
        price_in_cents
        id
      }
    }
  `);

  const arrayProducts: Product[] = Object.values(allProducts);
  return {
    props: {
      arrayProducts,
    },
  };
};

const ContainerPagination = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 21px;
  margin-bottom: 21px;
`;
export default Home;
