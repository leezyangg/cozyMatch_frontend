// preferencesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preferences: null,
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    updatePreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const { updatePreferences } = preferencesSlice.actions;

export const selectPreferences = (state) => state.preferences.preferences;

export default preferencesSlice.reducer;
