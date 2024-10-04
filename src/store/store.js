import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from './background/background.slice';
import cityReducer from './cities/cities.slice'

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    location: cityReducer
  },
})