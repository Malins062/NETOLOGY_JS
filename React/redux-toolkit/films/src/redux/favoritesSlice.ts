import { createSlice } from '@reduxjs/toolkit';
import { ShortFilm } from '../entities/Film/model';
import { apiKey } from './api';

interface FavoritesState {
  data: ShortFilm[];
  error: null;
}

// Получение куков
const getStorage = () => {
  const dataStorage = window.localStorage.getItem(apiKey);
  return dataStorage ? JSON.parse(dataStorage) : [];
}

// Установка куков
const setStorage = (data: ShortFilm[]) => {
  try {
    window.localStorage.setItem(apiKey, JSON.stringify(data));
    return null;
  } catch(e: any) {
    return e.code;
  }
}

// Перовоначальное состояние каталога избранных фильмов
const initialState: FavoritesState = {  
  data: getStorage(),
  error: null,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action) => {
      action.payload.isFavorite = true;
      state.data = [...state.data, action.payload];
      state.error = setStorage(state.data);
    },

    removeItem: (state, action) => {
      state.data = state.data.filter((item) => (item.imdbID !== action.payload.imdbID));
      state.error = setStorage(state.data);
    },
  },
});

export const { addItem, removeItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;