import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const reducer = combineReducers({
  search: searchReducer,
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