import React, { ReactNode, createContext, useContext, useState } from 'react';
import { TabType } from '../@types/types';

const NavigationContext = createContext<NavigationContextData>(
  [] as unknown as NavigationContextData
);

interface NavigationContextData {
  page: number;
  categoryProduct: TabType;
  changePage: (val: number) => void;
  changeCategory: (val: TabType) => void;
}

interface NavigationProvider {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProvider) => {
  const [page, setPage] = useState(1);
  const [categoryProduct, setCategoryProduct] = useState<TabType>('all');

  const changePage = (val: number) => {
    setPage(val);
  };
  const changeCategory = (val: TabType) => {
    setCategoryProduct(val);
  };

  return (
    <NavigationContext.Provider
      value={{
        page,
        categoryProduct,
        changePage,
        changeCategory,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation(): NavigationContextData {
  const context = useContext(NavigationContext);

  return context;
}
