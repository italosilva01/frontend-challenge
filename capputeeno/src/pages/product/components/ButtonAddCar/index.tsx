import React from 'react';
import { Button } from '@mui/material';

export const ButtonAddCard = () => {
  return (
    <Button
      variant="contained"
      className="bg-[#115D8C]  py-3 gap-4 w-[448px]  "
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
