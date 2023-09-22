import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DetailsFilm } from '../entities/Film/model';
import { FETCH_STATUS, FetchStatus, apiKey, url } from './api';

interface CardState {
  data: DetailsFilm | undefined;
  isLoading: boolean;
  loadError: any;
  status: FetchStatus;
}

// Перовоначальное состояние детального состояни фильма
const initialState: CardState = {  
  data: undefined,
  isLoading: false,
  loadError: null,
  status: FETCH_STATUS.IDLE,
}

const fetchCard = createAsyncThunk(
  'card/fetchCard',
  async function (searchId: string, { rejectWithValue }) {
      try {
          const response = await fetch(`${url}/?apikey=${apiKey}&i=${searchId}`);
          if (!response.ok) {
              throw new Error('Ошибка при получении данных с сервера!');
          }
          const card = await response.json();
          return card;
      } catch (error: any) {
          return rejectWithValue(error.message);
      }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.isLoading = true;
        state.loadError = null;
        state.status = FETCH_STATUS.PENDING;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = FETCH_STATUS.IDLE;
        // console.log(action.payload);
        if (action.payload.Response === 'True') {
          state.loadError = null;
          state.data = action.payload;
        } else {
          state.loadError = action.payload.Error;
          state.data = undefined;
        }
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.isLoading = false;
        state.loadError = action.payload;
        state.status = FETCH_STATUS.PENDING;
      })
  }

});

export { fetchCard }

export default cardSlice.reducer;