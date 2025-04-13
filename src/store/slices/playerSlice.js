// src/store/slices/playerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  queue: [],
  isPlaying: false,
  volume: 80,
  progress: 0,
  duration: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    addToQueue: (state, action) => {
      state.queue.push(action.payload);
    },
    clearQueue: (state) => {
      state.queue = [];
    },
    nextTrack: (state) => {
      if (state.queue.length > 0) {
        state.currentTrack = state.queue[0];
        state.queue = state.queue.slice(1);
      } else {
        state.currentTrack = null;
        state.isPlaying = false;
      }
    },
  },
});

export const { 
  setCurrentTrack, 
  togglePlay, 
  setVolume, 
  setProgress, 
  setDuration,
  addToQueue,
  clearQueue,
  nextTrack,
} = playerSlice.actions;

export default playerSlice.reducer;