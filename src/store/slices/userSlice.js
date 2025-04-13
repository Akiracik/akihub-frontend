// src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: true, // For demo purposes, set to true
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null,
  },
  favorites: [],
  history: [],
  lists: [],
  settings: {
    darkMode: false,
    notifications: {
      email: true,
      push: true,
      newsletter: false,
    },
    preferences: {
      autoplay: true,
      contentWarnings: true,
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
    },
    addToHistory: (state, action) => {
      // Remove if already exists to avoid duplicates
      state.history = state.history.filter(item => item.id !== action.payload.id);
      // Add to beginning of array
      state.history.unshift(action.payload);
    },
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { 
  login, 
  logout, 
  updateProfile, 
  addToFavorites, 
  removeFromFavorites, 
  addToHistory,
  updateSettings,
} = userSlice.actions;

export default userSlice.reducer;