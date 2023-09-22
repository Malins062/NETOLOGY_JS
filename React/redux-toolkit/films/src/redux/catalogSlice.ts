import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ShortFilm } from '../entities/Film/model';
import { FETCH_STATUS, FetchStatus, apiKey, url } from './api';

interface CatalogState {
  data: ShortFilm[];
  filter: string;
  isLoading: boolean;
  loadError: any;
  status: FetchStatus;
}

// Перовоначальное состояние каталога фильмов
const initialState: CatalogState = {  
  data: [],
  filter: '',
  isLoading: false,
  loadError: null,
  status: FETCH_STATUS.IDLE,
}

const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async function (searchText: string, { rejectWithValue }) {
      try {
          const response = await fetch(`${url}/?apikey=${apiKey}&s=${searchText}`);
          if (!response.ok) {
              throw new Error('Ошибка при получении данных с сервера!');
          }
          const items = await response.json();
          return items;
      } catch (error: any) {
          return rejectWithValue(error.message);
      }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
      
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.loadError = null;
        state.status = FETCH_STATUS.PENDING;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = FETCH_STATUS.IDLE;
        // console.log(action.payload);
        if (action.payload.Response === 'True') {
          state.loadError = null;
          state.data = action.payload.Search;
        } else {
          state.loadError = action.payload.Error;
          state.data = [];
        }
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.loadError = action.payload;
        state.status = FETCH_STATUS.PENDING;
      })
  }

});

export const { setFilter } = catalogSlice.actions;
export { fetchCatalog}

export default catalogSlice.reducer;