import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemsSlice';
import itemReducer from './reducers/itemSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const reducer = combineReducers({
  items: itemsReducer,
  item: itemReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export { store };
export type { AppDispatch, RootState };