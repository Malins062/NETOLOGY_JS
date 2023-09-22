import { RootState } from './store';

export const favoritesData = (state: RootState) => state.favorites.data;
export const favoritesCount = (state: RootState) => state.favorites.data.length;
export const favoritesError = (state: RootState) => state.favorites.error;
;
