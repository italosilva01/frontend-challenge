import React from 'react';
import { Button } from '@mui/material';

export const ButtonAddCard = () => {
  return (
    <Button variant="contained" color="secondary">
      <img className="ml-8" src="/images/shopping-bag.svg" alt="shopping-bag" />
      Adicionar ao carrinho
    </Button>
  );
};
