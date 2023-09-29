import { RootState } from '../store';

export const searchItems = (state: RootState) => state.search.items;
export const searchValue = (state: RootState) => state.search.value;
export const searchIsLoading = (state: RootState) => state.search.isLoading;
export const searchLoadError = (state: RootState) => state.search.loadError;
