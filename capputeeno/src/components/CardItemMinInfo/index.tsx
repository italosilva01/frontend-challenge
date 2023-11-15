/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface CardItemMinInfo {
  productName: string;
  productPrice: string;
  imageUrl: string;
}
export const CardItemMinInfo = ({
  productName,
  productPrice,
  imageUrl,
}: CardItemMinInfo) => {
  const parteInteira = String(productPrice).substring(0, 2);
  const parteDecimal = String(productPrice).substring(2, productPrice.length);
  const numeroComPontoFinal = `${parteInteira}.${parteDecimal}`;

  return (
    <Box className=" rounded-lg bg-white w-[16rem] min-h-min ">
      <Image
        src={imageUrl}
        width={256}
        height={300}
        className="border rounded-t-lg"
      />
      <Box className="grid px-3 py-2 gap-y-2">
        <p className="prose-base font-['Saira'] text-base leading-6 ">
          {productName}
        </p>

        <div className="w-[14.25rem] h-[1px] border border-[DCE2E5] mx-auto" />

        <p className="font-bold ">
          {Number(numeroComPontoFinal).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </Box>
    </Box>
  );
};
