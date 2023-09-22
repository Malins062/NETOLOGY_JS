import {
  catalogData, 
  catalogFilter, 
  catalogStatus,
  catalogIsLoading,
  catalogLoadError,
} from './catalogSelectors.js';

import {
  favoritesData, 
  favoritesError,
  favoritesCount,
} from './favoritesSelectors.js';

import {
  cardData, 
  cardStatus,
  cardIsLoading,
  cardLoadError,
} from './cardSelectors.js';

export const selectors = {
  
  catalog: {
    data: catalogData,
    filter: catalogFilter,
    status: catalogStatus,
    loading: catalogIsLoading,
    error: catalogLoadError,
  },

  card: {
    data: cardData,
    status: cardStatus,
    loading: cardIsLoading,
    error: cardLoadError,
  },

  favorites: {
    data: favoritesData,
    error: favoritesError,
    count: favoritesCount,
  },

};