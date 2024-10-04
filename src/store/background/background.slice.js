import { createSlice } from "@reduxjs/toolkit";

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    isDay: 1,
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.isDay = action.payload;
    },
  },
})

export const { setBackgroundColor } = backgroundSlice.actions;
export default backgroundSlice.reducer;