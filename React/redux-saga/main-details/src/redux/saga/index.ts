import { spawn } from 'redux-saga/effects';
import { watchGetItemsSaga } from './getItemsSaga';
import { watchGetItemSaga } from './getItemSaga';

export default function* saga() {
  yield spawn(watchGetItemsSaga);
  yield spawn(watchGetItemSaga);
}
