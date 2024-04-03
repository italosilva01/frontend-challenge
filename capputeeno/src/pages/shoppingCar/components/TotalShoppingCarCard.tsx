import React, { useMemo } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { convertCurrencyBRL } from '../../../utils/convertCurrencyBRL';

interface TotalShoppingCarCardProps {
  subTotalProducts: number;
}

export const TotalShoppingCarCard = ({
  subTotalProducts,
}: TotalShoppingCarCardProps) => {
  return (
    <Box className="border border-1 w-[352px] bg-white py-4 px-6">
      <Typography variant="h6" className="text-gray-500 font-bold	">
        RESUMO DO PEDIDO
      </Typography>

      <Box className="mt-8 h-[700px] flex flex-col gap-3">
        <Box className="flex justify-between ">
          <Typography className="text-sm text-gray-500">
            Subtotal de produtos
          </Typography>
          <Typography className="text-sm text-gray-500">
            {subTotalProducts}
          </Typography>
        </Box>
        <Box className="flex justify-between ">
          <Typography className="text-sm text-gray-500">Entrega</Typography>
          <Typography className="text-sm text-gray-500">R$ 40,00</Typography>
        </Box>
        <Divider flexItem />

        <Box className="flex justify-between">
          <Typography className="text-sm text-gray-500">Total</Typography>
          <Typography className="text-sm text-gray-500">
            {convertCurrencyBRL(subTotalProducts + 40)}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          className="w-full bg-green-500 text-white border border-white"
        >
          FINALIZAR A COMPRA
        </Button>
      </Box>
    </Box>
  );
};
