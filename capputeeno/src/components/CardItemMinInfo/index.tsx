/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { convertPrice } from '../../utils';
import { convertCurrencyBRL } from '../../utils/convertCurrencyBRL';

interface CardItemMinInfo {
  productName: string;
  productPrice: string;
  imageUrl: string;
  idProduct: string;
}
export const CardItemMinInfo = ({
  productName,
  productPrice,
  imageUrl,
  idProduct,
}: CardItemMinInfo) => {
  const numeroComPontoFinal = convertPrice(productPrice);
  return (
    <Link href={`/product/${idProduct}`}>
      <Box className=" rounded-lg bg-white w-[16rem] min-h-min cursor-pointer ">
        <Image
          src={imageUrl}
          width={256}
          height={300}
          className="border rounded-t-lg"
        />
        <Box className="grid px-3 py-2 gap-y-2">
          <p
            className="prose-base font-['Saira'] text-base leading-6 "
            data-testid="product-name"
          >
            {productName}
          </p>

          <div className="w-[14.25rem] h-[1px] border border-[DCE2E5] mx-auto" />

          <p className="font-bold" data-testid="product-cost">
            {convertCurrencyBRL(Number(numeroComPontoFinal))}
          </p>
        </Box>
      </Box>
    </Link>
  );
};
