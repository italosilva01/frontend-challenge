import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { useProduct } from '../../context/ProductContext';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';

export const PaginationStyled = () => {
  const { currentPage, changeCurrentPage, addProducts } = useProduct();

  const handlePagined = async (page: number) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${page},perPage: 24) {
          image_url
          name
          price_in_cents
        }
      }
    `);
    changeCurrentPage(page);
    addProducts(allProducts);
  };

  return (
    <Box>
      <Pagination
        count={2}
        shape="rounded"
        onChange={(_e, value) => {
          changeCurrentPage(value);
          handlePagined(value);
        }}
        page={currentPage}
      />
    </Box>
  );
};
