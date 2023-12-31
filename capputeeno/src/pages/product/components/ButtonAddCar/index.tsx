import React from 'react';
import { Button } from '@mui/material';

export const ButtonAddCard = () => {
  return (
    <Button
      variant="contained"
      className="bg-[#115D8C] flex py-3 gap-4 w-[448px] pa "
    >
      <img
        className="ml-8 text-white"
        src="/images/shopping-bag-white.svg"
        alt="shopping-bag"
      />
      Adicionar ao carrinho
    </Button>
  );
};
