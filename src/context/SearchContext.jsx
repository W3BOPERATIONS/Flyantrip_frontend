import React, { createContext, useContext } from 'react';
import { useSearchState } from '../hooks/useSearchState';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const searchState = useSearchState();

  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
