import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';
import { ProductProvider } from '../context/ProductContext';
import { Box } from '@mui/material';
import { SearchProvider } from '../context/SearchContext';
import { NavigationProvider } from '../context/NavigationContext';
import { Header } from '../components/Header';
import { ShoppingCarProvider } from '../hooks/shoppingCar';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <Box className="bg-cream">
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <SearchProvider>
            <ShoppingCarProvider>
              <NavigationProvider>
                <Header />
                <Component {...pageProps} />
              </NavigationProvider>
            </ShoppingCarProvider>
          </SearchProvider>
        </ProductProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default MyApp;
