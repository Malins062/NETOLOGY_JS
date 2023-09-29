import { createSlice } from '@reduxjs/toolkit';
import { DetailsService } from '../../entities/Service/model';

interface ItemState {
  data: DetailsService;
  isLoading: boolean;
  loadError: any;
}

const initialState: ItemState = {  
  data: {
    id: 0,
    name: '',
    price: 0,
    content: ''
  },
  isLoading: false,
  loadError: null,
}

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    itemRequest: (state, action) => {
      state.data.id = action.payload;
      state.isLoading = true;
      state.loadError = null;
      // console.log('reducer itemRequest', state);
    },
      
    itemFailure: (state, action) => {
      state.isLoading = false;
      state.loadError = action.payload;
    },
      
    itemSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.loadError = null
    },
      
  },

});

export const { 
  itemFailure, 
  itemRequest, 
  itemSuccess,
} = itemSlice.actions;

export default itemSlice.reducer;
