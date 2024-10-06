import { createSlice } from "@reduxjs/toolkit";

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    isDay: null,
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.isDay = action.payload;
    },
  },
})

export const { setBackgroundColor } = backgroundSlice.actions;
export default backgroundSlice.reducer;