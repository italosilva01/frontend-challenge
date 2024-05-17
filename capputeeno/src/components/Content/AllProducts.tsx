import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import { CardItemMinInfo } from '../CardItemMinInfo';

import { useProduct } from '../../context/ProductContext';
import { EmptySearch } from '../EmptySearch';
import { Product } from '../../@types/types';

interface AllProductsProps {
  initProducts: Product[];
}

export const AllProducts = ({ initProducts }: AllProductsProps) => {
  const { addProducts, products } = useProduct();

  useEffect(() => {
    if (initProducts)
      addProducts(Object.values(initProducts)[0] as unknown as Product[]);
  }, []);

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, md: 4 }}
          className=" mx-auto w-[100%]   h-[100%] "
          alignItems="center"
          justifyContent="center"
        >
          {products?.length === 0 ? (
            <EmptySearch />
          ) : (
            products?.map(({ name, image_url, price_in_cents, id }, index) => (
              <Grid item key={index} md>
                <CardItemMinInfo
                  idProduct={id}
                  productPrice={price_in_cents}
                  imageUrl={image_url}
                  productName={name}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};
