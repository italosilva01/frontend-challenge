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
import { useProduct } from '../context/ProductContext';
import styled from '@emotion/styled';
import { useNavigation } from '../context/NavigationContext';

const Home: NextPage = (props) => {
  const { addProducts } = useProduct();
  const { changePage, page } = useNavigation();

  const handlePagined = async (newPage: number) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${newPage},perPage: 12) {
          image_url
          name
          price_in_cents
        }
      }
    `);
    changePage(newPage);
    addProducts(allProducts);
  };
  return (
    <div className="bg-[#F0F0F5] h-[100%] ">
      <Head>
        <title>Capputeeno | Home</title>
      </Head>
      <Header />
      <main className=" w-[90%]  m-auto  overflow-auto bg-[#F0F0F5]">
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
