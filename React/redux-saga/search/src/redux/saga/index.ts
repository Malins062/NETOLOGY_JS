import { spawn } from 'redux-saga/effects';
import { watchChangeSearchSaga } from './changeSearchSaga';
import { watchGetItemsSaga } from './getItemsSaga';

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchGetItemsSaga);
}
