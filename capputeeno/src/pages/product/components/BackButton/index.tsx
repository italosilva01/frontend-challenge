import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const BackButton = () => {
  const route = useRouter();

  return (
    <Box
      className="flex  py-4 items-center text-[#737380]"
      onClick={() => route.back()}
    >
      <IconButton>
        <Image src={'/images/back-arrow.svg'} width={24} height={24} />
      </IconButton>
      <Typography variant="body1"> Voltar</Typography>
    </Box>
  );
};
