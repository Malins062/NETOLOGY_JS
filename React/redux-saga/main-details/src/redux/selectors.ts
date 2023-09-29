import {
  itemsData, 
  itemsIsLoading,
  itemsLoadError,
} from './reducers/itemsSelectors.js';

import {
  itemData, 
  itemIsLoading,
  itemLoadError,
} from './reducers/itemSelectors.js';

export const selectors = {
  
  items: {
    data: itemsData,
    loading: itemsIsLoading,
    error: itemsLoadError,
  },

  item: {
    data: itemData,
    loading: itemIsLoading,
    error: itemLoadError,
  },

};