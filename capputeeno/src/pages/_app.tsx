import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';
import { ProductProvider } from '../context/ProductContext';
import { Box } from '@mui/material';
import { SearchProvider } from '../context/SearchContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <Box className="bg-[#F0F0F5]">
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </ProductProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default MyApp;
