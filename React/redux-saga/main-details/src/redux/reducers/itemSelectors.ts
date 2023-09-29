import { RootState } from '../store';

export const itemData = (state: RootState) => state.item.data;
export const itemIsLoading = (state: RootState) => state.item.isLoading;
export const itemLoadError = (state: RootState) => state.item.loadError;
