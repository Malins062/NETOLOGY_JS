import { 
  searchFailure,
  searchSuccess,
  searchRequest,
  clearItems,
  changeSearchValue,
} from './reducers/searchSlice.js';

export const actions = {
  search: {
    changeSearch: changeSearchValue,
    clearItems: clearItems,
    failure: searchFailure,
    request: searchRequest,
    success: searchSuccess,
  },
};