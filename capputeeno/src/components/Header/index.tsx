import React from 'react';
import { SearchItem } from '../SearchItem';
import { Badge } from '@mui/material';
import { useShoppingCar } from '../../hooks/shoppingCar';

export const Header = () => {
  const { productsShoppingCar } = useShoppingCar();
  return (
    <div className="blue h-20 flex  justify-center bg-white">
      <div className="w-4/5 flex justify-between items-center border-1 border-zinc-700	">
        <div>
          <img src="/images/capputeeno.svg" alt="Capputeeno" />
        </div>
        <div className="flex justify-center w-3/6">
          <div>
            <SearchItem />
          </div>
          <Badge
            badgeContent={productsShoppingCar.length}
            color="error"
            className="mb-3"
          >
            <img
              className="ml-8"
              src="/images/shopping-bag.svg"
              alt="shopping-bag"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
};
