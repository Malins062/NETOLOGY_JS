import { RootState } from './store';

export const catalogData = (state: RootState) => state.catalog.data;
export const catalogStatus = (state: RootState) => state.catalog.status;
export const catalogFilter = (state: RootState) => state.catalog.filter;
export const catalogIsLoading = (state: RootState) => state.catalog.isLoading;
export const catalogLoadError = (state: RootState) => state.catalog.loadError;
