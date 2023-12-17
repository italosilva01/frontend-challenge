import React, { ReactNode, createContext, useContext, useState } from 'react';

const NavigationContext = createContext<NavigationContextData>([]);

interface NavigationContextData {
  page: number;
  changePage: (val: number) => void;
}

interface NavigationProvider {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProvider) => {
  const [page, setPage] = useState(1);

  const changePage = (val: number) => {
    setPage(val);
  };

  return (
    <NavigationContext.Provider
      value={{
        page,
        changePage,
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
