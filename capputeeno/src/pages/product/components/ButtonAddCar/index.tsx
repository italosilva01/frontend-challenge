import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ButtonAddCardProps extends ButtonProps {
  handleFunction: () => void;
  productAddedCar: boolean;
}
export const ButtonAddCard = (props: ButtonAddCardProps) => {
  const { handleFunction, productAddedCar } = props;
  return (
    <Button
      variant="contained"
      className="bg-[#115D8C]  py-3 gap-4 w-[448px]  "
      onClick={handleFunction}
      {...props}
    >
      <img
        className="ml-8 text-white"
        src="/images/shopping-bag-white.svg"
        alt="shopping-bag"
      />
      {productAddedCar ? 'Produto Já está no carro' : 'Adicionar ao carrinho'}
    </Button>
  );
};
