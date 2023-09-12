import {
    combineReducers,
    legacy_createStore,
} from 'redux';
import {  composeWithDevTools } from 'redux-devtools-extension';

import filterReducer from './filterReducer';
import formReducer from './formReducer';
import dataReducer from './dataReducer';

type IRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    filter: filterReducer,
    form: formReducer,
    list: dataReducer,
}) ;

function configureStore() {
  return legacy_createStore(
    rootReducer,
    composeWithDevTools());
}

export default configureStore;
export type {IRootState}