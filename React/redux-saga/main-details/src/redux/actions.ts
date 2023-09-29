import { 
  itemsFailure,
  itemsSuccess,
  itemsRequest,
  clearItems,
} from './reducers/itemsSlice.js';

import { 
  itemFailure,
  itemSuccess,
  itemRequest,
} from './reducers/itemSlice.js';

export const actions = {
  items: {
    clearItems: clearItems,
    failure: itemsFailure,
    request: itemsRequest,
    success: itemsSuccess,
  },
  item: {
    failure: itemFailure,
    request: itemRequest,
    success: itemSuccess,
  },
};