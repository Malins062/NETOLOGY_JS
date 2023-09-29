import { createSlice } from '@reduxjs/toolkit';

export interface Item {
  id: string;
  name: string;
}

interface skillsState {
  items: Item[];
  value: string;
  isLoading: boolean;
  loadError: any;
}

const initialState: skillsState = {  
  items: [],
  value: '',
  isLoading: false,
  loadError: null,
  // status: FETCH_STATUS.IDLE,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.loadError = null;
      // console.log('reducer changeSearchValue');
    },

    clearItems: (state) => {
      state.items = [];
    },
      
    searchRequest: (state, action) => {
      state.value = action.payload;
      state.isLoading = true;
      state.loadError = null;
      // console.log('reducer searchRequest');
    },
      
    searchFailure: (state, action) => {
      state.isLoading = false;
      state.loadError = action.payload;
    },
      
    searchSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.loadError = null
    },
      
  },

});

export const { searchFailure, 
  searchRequest, 
  searchSuccess,
  clearItems,
  changeSearchValue,
} = searchSlice.actions;

export default searchSlice.reducer;
