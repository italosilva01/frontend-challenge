import React, { useEffect } from 'react';
import { Main } from '../../components/Main';
import { BackButton } from '../product/components/BackButton';
import { ProductCard } from './components/ProductCard';
import { useShoppingCar } from '../../hooks/shoppingCar';
import { Box, Typography } from '@mui/material';
import { TotalShoppingCarCard } from './components/TotalShoppingCarCard';

export default function Page() {
  const { productsShoppingCar } = useShoppingCar();

  const totalCart = productsShoppingCar.reduce(
    (acc, ele) => {
      acc.price += Number(ele.price_in_cents) * Number(ele.quantity);
      acc.quantity += Number(ele.quantity);

      return acc;
    },
    { quantity: 0, price: 0 }
  );

  const convertPrice = totalCart.price / 100;

  const totalPrice = convertPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Main>
      <BackButton />

      <Typography variant="h5" className="text-text-gray">
        SEU CARRINHO
      </Typography>

      <Typography variant="h6" className="text-text-gray">
        Total ({totalCart.quantity} produtos ) {totalPrice}
      </Typography>
      <Box className="flex gap-[32px]  mt-6 ">
        <Box className=" flex flex-col gap-y-4 h-full overflow-auto w-fit">
          {productsShoppingCar.map((ele) => (
            <ProductCard product={ele} />
          ))}
        </Box>

        <TotalShoppingCarCard subTotalProducts={convertPrice} />
      </Box>
    </Main>
  );
}
