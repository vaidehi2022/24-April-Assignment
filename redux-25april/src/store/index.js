import { configureStore, createSlice } from '@reduxjs/toolkit';

const buttonSlice = createSlice({
  name: 'buttons',
  initialState: {},
  reducers: {
    updateButton: (state, action) => {
      const { name } = action.payload;
      if (!state[name]) {
        state[name] = 0;
      }
      state[name]++;
    },
  },
});

export const { updateButton } = buttonSlice.actions;

const store = configureStore({
  reducer: buttonSlice.reducer,
});

export default store;
