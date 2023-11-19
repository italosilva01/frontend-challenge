import React from 'react';
import { Box, Typography } from '@mui/material';

export const EmptySearch = () => {
  return (
    <Box className="flex flex-col justify-start align-middle] h-screen ">
      <Typography variant="h1">Produto Não encontrado</Typography>
      <Typography variant="h2" className="mx-auto">
        Desculpe o Incomodo
      </Typography>
    </Box>
  );
};
