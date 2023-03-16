import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { Pagination } from '@mui/material';

import { Product } from '../../@types/types';
import { CardItemMinInfo } from '../CardItemMinInfo';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { useProduct } from '../../context/ProductContext';

interface AllProductsProps {
  initProducts: object;
}

export const AllProducts = ({ initProducts }: AllProductsProps) => {
  const { currentPage, changeCurrentPage, addProducts, products } =
    useProduct();

  useEffect(() => {
    if (initProducts) addProducts(Object.values(initProducts)[0]);
  }, []);

  const handlePagined = async (page: number) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${page},perPage: 12) {
          image_url
          name
          sales
        }
      }
    `);

    addProducts(allProducts);
  };

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
          <Pagination
            count={3}
            shape="rounded"
            onChange={(_e, value) => {
              changeCurrentPage(value);
              handlePagined(value);
            }}
            defaultPage={currentPage}
          />
        </Box>

        <Grid
          container
          spacing={1}
          columns={{ xs: 4, md: 4 }}
          className=" mx-auto p-0   w-[100%] "
          gap={2}
        >
          {products.map(({ name, image_url, sales }, index) => (
            <Grid item key={index} className="py-0 px-0">
              <CardItemMinInfo
                productPrice={`${sales},00`}
                imageUrl={image_url}
                productName={name}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '21px',
            marginBottom: '21px',
          }}
        >
          <Pagination
            count={2}
            shape="rounded"
            onChange={(_e, value) => {
              changeCurrentPage(value);
              handlePagined(value);
            }}
            defaultPage={currentPage}
          />
        </Box>
      </Box>
    </>
  );
};
