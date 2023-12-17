import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';
import { ProductProvider } from '../context/ProductContext';
import { Box } from '@mui/material';
import { SearchProvider } from '../context/SearchContext';
import { NavigationProvider } from '../context/NavigationContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <Box className="bg-[#F0F0F5]">
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <SearchProvider>
            <NavigationProvider>
              <Component {...pageProps} />
            </NavigationProvider>
          </SearchProvider>
        </ProductProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default MyApp;
