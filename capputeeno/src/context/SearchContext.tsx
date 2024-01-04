import React, { ReactNode, useContext, useState } from 'react';

const SearchContext = React.createContext<SearchContextData>(
  [] as unknown as SearchContextData
);

interface SearchContextData {
  changeCurrentPage: (v: number) => void;
  currentPage: number;
}

interface SearchProviderProps {
  children: ReactNode;
}
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const changeCurrentPage = (newValue: number) => {
    setCurrentPage(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        currentPage,
        changeCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  return context;
}
