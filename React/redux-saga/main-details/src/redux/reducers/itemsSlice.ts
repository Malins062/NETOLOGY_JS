import { createSlice } from '@reduxjs/toolkit';
import { ShortService } from '../../entities/Service/model';

interface ItemsState {
  data: ShortService[];
  isLoading: boolean;
  loadError: any;
}

const initialState: ItemsState = {  
  data: [],
  isLoading: false,
  loadError: null,
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearItems: (state) => {
      state.data = [];
    },
      
    itemsRequest: (state) => {
      state.isLoading = true;
      state.loadError = null;
    },
      
    itemsFailure: (state, action) => {
      state.isLoading = false;
      state.loadError = action.payload;
    },
      
    itemsSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.loadError = null
    },
      
  },

});

export const { 
  itemsFailure, 
  itemsRequest, 
  itemsSuccess,
  clearItems,
} = itemsSlice.actions;

export default itemsSlice.reducer;
