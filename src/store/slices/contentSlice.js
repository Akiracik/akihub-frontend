// src/store/slices/contentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  recommendations: [],
  categories: {
    film: [],
    music: [],
    anime: [],
    ai: [],
  },
  loading: false,
  error: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    fetchContentStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchContentSuccess: (state, action) => {
      const { contentType, data } = action.payload;
      
      if (contentType === 'trending') {
        state.trending = data;
      } else if (contentType === 'recommendations') {
        state.recommendations = data;
      } else if (['film', 'music', 'anime', 'ai'].includes(contentType)) {
        state.categories[contentType] = data;
      }
      
      state.loading = false;
    },
    fetchContentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  fetchContentStart, 
  fetchContentSuccess, 
  fetchContentFailure 
} = contentSlice.actions;

export default contentSlice.reducer;