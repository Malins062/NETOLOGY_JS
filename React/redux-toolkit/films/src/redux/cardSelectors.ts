import { RootState } from './store';

export const cardData = (state: RootState) => state.card.data;
export const cardStatus = (state: RootState) => state.card.status;
export const cardIsLoading = (state: RootState) => state.card.isLoading;
export const cardLoadError = (state: RootState) => state.card.loadError;
