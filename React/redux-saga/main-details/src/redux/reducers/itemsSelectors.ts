import { RootState } from '../store';

export const itemsData = (state: RootState) => state.items.data;
export const itemsIsLoading = (state: RootState) => state.items.isLoading;
export const itemsLoadError = (state: RootState) => state.items.loadError;
