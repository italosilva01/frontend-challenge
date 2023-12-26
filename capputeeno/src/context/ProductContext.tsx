import React, { ReactNode, useState, useContext, createContext } from 'react';
import { Product } from '../@types/types';

const ProductContext = createContext<ProductContextData>([]);

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: Product[];
  addProducts: (newProducts: Product[]) => void;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  const addProducts = (newProducts: Product[]) => {
    console.log(newProducts);
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        addProducts,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  return context;
}
