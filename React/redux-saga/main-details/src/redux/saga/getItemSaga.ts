import { put, retry, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions';
import { getItems } from '../../api/items';

function* fetchItem(action: ReturnType<typeof actions.item.request>) {
  // console.log(`Run fetchItem`);
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;

    const data: [] | string = 
      yield retry(retryCount, retryDelay, getItems, action.payload);

    // console.log(`items=${data}`);
    yield put(actions.item.success(data));

  } catch (e: any) {
    yield put(actions.item.failure(e.message));
  }
}

export function* watchGetItemSaga() {
  yield takeLatest('item/itemRequest', fetchItem);
}
