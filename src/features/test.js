import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'test',
  initialState: {value: 'WAITING FOR ACTION'},
  reducers: {
    triggerTest: (state, action) => {
      return {...state, value: action.payload};
    },
  },
});

export const { triggerTest } = slice.actions;

export default slice.reducer;
