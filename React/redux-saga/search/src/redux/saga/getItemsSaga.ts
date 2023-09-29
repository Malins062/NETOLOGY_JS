import { put, retry, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions';
import { getItems } from '../../api/items';

function* fetchItems(action: ReturnType<typeof actions.search.request>) {
  // console.log(`Run fetchItems, action.payload=${action.payload}`);
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;

    const data: [] | string = 
      yield retry(retryCount, retryDelay, getItems, action.payload);

    // console.log(`items=${data}`);
    yield put(actions.search.success(data));

  } catch (e: any) {
    yield put(actions.search.failure(e.message));
  }
}

function* watchGetItemsSaga() {
  // console.log('watchGetItemsSaga');
  yield takeLatest('search/searchRequest', fetchItems);
}

export { watchGetItemsSaga }
