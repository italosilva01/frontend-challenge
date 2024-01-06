import React from 'react';
import { Button } from '@mui/material';

interface ButtonAddCardProps {
  handleFunction: () => void;
}
export const ButtonAddCard = ({ handleFunction }: ButtonAddCardProps) => {
  return (
    <Button
      variant="contained"
      className="bg-[#115D8C]  py-3 gap-4 w-[448px]  "
      onClick={handleFunction}
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
