import React, { ReactElement, useState } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductProvider } from '../context/ProductContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>{children} </ProductProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
