import React, { useMemo } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

interface TotalShoppingCarCardProps {
  subTotalProducts: number;
}

export const TotalShoppingCarCard = ({
  subTotalProducts,
}: TotalShoppingCarCardProps) => {
  return (
    <Box className="border border-1 w-[352px] bg-white py-4 px-6">
      <Typography variant="h6" className="text-text-gray font-bold	">
        RESUMO DO PEDIDO
      </Typography>

      <Box className="mt-8 h-[700px] flex flex-col gap-3">
        <Box className="flex justify-between ">
          <Typography className="text-sm text-text-gray">
            Subtotal de produtos
          </Typography>
          <Typography className="text-sm text-text-gray">
            {subTotalProducts}
          </Typography>
        </Box>
        <Box className="flex justify-between ">
          <Typography className="text-sm text-text-gray">Entrega</Typography>
          <Typography className="text-sm text-text-gray">R$ 40,00</Typography>
        </Box>
        <Divider flexItem />

        <Box className="flex justify-between">
          <Typography className="text-sm text-text-gray">Total</Typography>
          <Typography className="text-sm text-text-gray">
            {(subTotalProducts + 40).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
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
