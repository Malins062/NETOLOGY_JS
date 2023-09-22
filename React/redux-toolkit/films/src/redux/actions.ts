import { setFilter as catalogFilter } from './catalogSlice.js';
import { 
  addItem as favoritesAddItem,
  removeItem as favoritesRemoveItem,
} from './favoritesSlice.js';

export const actions = {
  catalog: {
    filter: catalogFilter,
  },
  favorites: {
    add: favoritesAddItem,
    remove: favoritesRemoveItem,
  },
};