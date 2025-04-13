// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import contentReducer from './slices/contentSlice';
import playerReducer from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
    player: playerReducer,
  },
});