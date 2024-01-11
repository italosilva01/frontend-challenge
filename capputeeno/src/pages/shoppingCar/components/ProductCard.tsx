import React, { useEffect, useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { Product } from '../../../@types/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantityProduct, setQuantityProduct] = useState(1);
  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <Box className="w-[736px] rounded-md	overflow-hidden bg-white flex gap-x-8 ">
      <Image src={product.image_url} width={256} height={211} />

      <Box className="w-full  text-text-gray   pl-0 p-4 flex flex-col gap-4">
        <Box className="flex justify-between items-center">
          <Typography variant="h6">{product.name}</Typography>
          <IconButton>
            <img src="/images/trash.svg" />
          </IconButton>
        </Box>

        <Typography variant="subtitle2" className="text-xs">
          {product.description}
        </Typography>

        <Box className="flex justify-between">
          <TextField
            type="number"
            defaultValue={quantityProduct}
            className="w-[64px]"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setQuantityProduct(Number(e.currentTarget.value));
            }}
          />
          <Typography>
            {Number(product.price_in_cents) * quantityProduct}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
