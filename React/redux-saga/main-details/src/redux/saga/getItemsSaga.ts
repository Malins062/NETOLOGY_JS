import { put, retry, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions';
import { getItems } from '../../api/items';

function* fetchItems() {
  // console.log(`Run fetchItems`);
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;

    const data: [] | string = 
      yield retry(retryCount, retryDelay, getItems);

    // console.log(`items=${data}`);
    yield put(actions.items.success(data));

  } catch (e: any) {
    yield put(actions.items.failure(e.message));
  }
}

export function* watchGetItemsSaga() {
  yield takeLatest('items/itemsRequest', fetchItems);
}
