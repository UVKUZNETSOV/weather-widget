import { createSlice } from "@reduxjs/toolkit"

export const citiesSlice = createSlice({
  name: "location",
  initialState: {
    city: "Los angeles"
  } ,
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload;
    }
  }
})

export const { setLocation } = citiesSlice.actions
export default citiesSlice.reducer