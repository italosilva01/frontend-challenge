import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';
import { ProductProvider } from '../context/ProductContext';
import { Box } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <Box className="bg-[#F0F0F5]">
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default MyApp;
