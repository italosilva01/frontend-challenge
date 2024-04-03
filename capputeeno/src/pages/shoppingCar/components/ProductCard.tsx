import React, { useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { Product } from '../../../@types/types';
import Image from 'next/image';
import { useShoppingCar } from '../../../hooks/shoppingCar';
import { convertCurrencyBRL } from '../../../utils/convertCurrencyBRL';

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { removeCar, changeQuantityProductCar } = useShoppingCar();

  const quantityProduct = product.quantity || 1;
  const convertedPrice =
    (Number(product.price_in_cents) / 100) * quantityProduct;

  return (
    <Box className="w-[736px] h-[245px] rounded-md	overflow-hidden bg-white flex gap-x-8 ">
      <Image src={product.image_url} width={256} height={211} />

      <Box className="w-full  text-gray-500   pl-0 p-4 flex flex-col gap-4">
        <Box className="flex justify-between items-center">
          <Typography variant="h6">{product.name}</Typography>
          <IconButton
            onClick={() => {
              removeCar(product.id);
            }}
          >
            <img src="/images/trash.svg" />
          </IconButton>
        </Box>

        <Typography variant="subtitle2" className="text-xs">
          {product.description}
        </Typography>

        <Box className="flex justify-between items-center">
          <TextField
            type="number"
            defaultValue={product.quantity}
            className="w-[64px] h-[40px] color-[#A8A8B3]"
            onChange={(e) => {
              changeQuantityProductCar(
                product.id,
                Number(e.currentTarget.value)
              );
            }}
            InputProps={{
              inputProps: { min: 0 },
            }}
          />
          <Typography variant="body1" className="font-bold">
            {convertCurrencyBRL(Number(convertedPrice))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
