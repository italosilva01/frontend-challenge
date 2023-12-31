import React from 'react';
import { Box, Typography } from '@mui/material';
interface DescriptionProduct {
  description: string;
}
export const DescriptionProduct = ({ description }: DescriptionProduct) => {
  return (
    <Box>
      <Box className=" flex flex-col gap-2  text-[#737380]">
        <Box>
          <Typography className="text-base">DESCRIÇÃO</Typography>
        </Box>
        <Box className="w-[448px] text-[#737380]">{description}</Box>
      </Box>
    </Box>
  );
};
