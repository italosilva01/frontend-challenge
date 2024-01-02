import React from 'react';
import { Box } from '@mui/material';
import { ButtonAddCard } from '../ButtonAddCar';
import { DescriptionProduct } from '../DescriptionProduct';
import { Product } from '../../../../@types/types';

interface InforProductProps {
  product: Product;
}

export const InforProduct = ({ product }: InforProductProps) => {
  return (
    <Box className="flex flex-col ">
      <DescriptionProduct description={product.description || ' '} />
      <ButtonAddCard />
    </Box>
  );
};
