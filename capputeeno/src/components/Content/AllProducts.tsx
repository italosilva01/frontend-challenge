import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import { CardItemMinInfo } from '../CardItemMinInfo';

import { useProduct } from '../../context/ProductContext';
import { PaginationStyled } from '../PaginationStyled';
import { EmptySearch } from '../EmptySearch';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';

interface AllProductsProps {
  initProducts: object;
}

export const AllProducts = ({ initProducts }: AllProductsProps) => {
  const { addProducts, products } = useProduct();
  const { changeCurrentPage } = useProduct();

  const handlePagined = async (page: number) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${page},perPage: 12) {
          image_url
          name
          price_in_cents
        }
      }
    `);
    changeCurrentPage(page);
    addProducts(allProducts);
  };

  useEffect(() => {
    if (initProducts) addProducts(Object.values(initProducts)[0]);
  }, []);

  return (
    <>
      <Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '21px',
            marginBottom: '21px',
          }}
        >
          <PaginationStyled handlePagination={handlePagined} />
        </Box>

        <Grid
          container
          spacing={2}
          columns={{ xs: 4, md: 4 }}
          className=" mx-auto w-[100%]   h-[100%] "
          alignItems="center"
          justifyContent="center"
        >
          {products.length === 0 ? (
            <EmptySearch />
          ) : (
            products.map(({ name, image_url, price_in_cents }, index) => (
              <Grid item key={index} md>
                <CardItemMinInfo
                  productPrice={price_in_cents}
                  imageUrl={image_url}
                  productName={name}
                />
              </Grid>
            ))
          )}
        </Grid>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '21px',
            marginBottom: '21px',
          }}
        >
          <PaginationStyled handlePagination={handlePagined} />
        </Box>
      </Box>
    </>
  );
};
