import { debounce, put } from 'redux-saga/effects';
import { actions } from '../actions';
import { REQUEST_INTERVAL } from '../../api/consts';

function filterChangeSearchSaga(action: any) {
  const result = (action.type === 'search/changeSearchValue' && action.payload.trim() !== '');
  // console.log('filterSaga', action, result);
  return result;
}

function* handleChangeSearchSaga(action: any) {
  // console.log('handleChangeSearchSaga', action.payload);
  yield put(actions.search.request(action.payload));
}

export function* watchChangeSearchSaga() {
  yield debounce(REQUEST_INTERVAL, filterChangeSearchSaga, handleChangeSearchSaga);
}
