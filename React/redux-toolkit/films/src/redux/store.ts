import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import favoritesReducer from './favoritesSlice';
import cardReducer from './cardSlice';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,    
    card: cardReducer,    
  }
});

export { store };
export type { AppDispatch, RootState, AppThunk };