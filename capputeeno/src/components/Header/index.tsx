import React from 'react';
import { SearchItem } from '../SearchItem';
import { Badge, IconButton } from '@mui/material';
import { useShoppingCar } from '../../hooks/shoppingCar';
import Link from 'next/link';

export const Header = () => {
  const { productsShoppingCar } = useShoppingCar();
  return (
    <div className="blue h-20 flex  justify-center bg-white">
      <div className="w-4/5 flex justify-between items-center border-1 border-zinc-700	">
        <div>
          <Link href={'/'}>
            <img
              src="/images/capputeeno.svg"
              alt="Capputeeno"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-center w-3/6">
          <div>
            <SearchItem />
          </div>

          <IconButton size="small">
            <Link href={`/shoppingCar`}>
              <Badge badgeContent={productsShoppingCar.length} color="error">
                <img src="/images/shopping-bag.svg" alt="shopping-bag" />
              </Badge>
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
