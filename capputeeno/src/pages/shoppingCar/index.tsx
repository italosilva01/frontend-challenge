import React, { useEffect } from 'react';
import { Main } from '../../components/Main';
import { BackButton } from '../product/components/BackButton';
import { ProductCard } from './components/ProductCard';
import { useShoppingCar } from '../../hooks/shoppingCar';
import { Box } from '@mui/material';

export default function Page() {
  const { productsShoppingCar } = useShoppingCar();

  useEffect(() => {
    console.log(productsShoppingCar);
  });
  return (
    <Main>
      <BackButton />

      <Box className=" flex flex-col gap-y-4 h-full overflow-auto">
        {productsShoppingCar.map((ele) => (
          <ProductCard product={ele} />
        ))}
      </Box>
    </Main>
  );
}
