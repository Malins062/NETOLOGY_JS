import {
  searchItems, 
  searchValue, 
  searchIsLoading,
  searchLoadError,
} from './reducers/searchSelectors.js';

export const selectors = {
  
  search: {
    items: searchItems,
    value: searchValue,
    loading: searchIsLoading,
    error: searchLoadError,
  },

};