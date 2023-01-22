import React, { ReactNode, useState, useContext } from 'react';
import { Product } from '../@types/types';

const ProductContext = React.createContext<ProductContextData>([] as Product[]);

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: Product[];
  addProducts: (newProducts: Product[]) => void;
  currentPage: number;
  changeCurrentPage: (newValue: number) => void;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const addProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
  };

  const changeCurrentPage = (newValue: number) => {
    setCurrentPage(newValue);
  };

  return (
    <ProductContext.Provider
      value={{
        addProducts,
        products,
        currentPage,
        changeCurrentPage,
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
