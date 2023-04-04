import { configureStore } from '@reduxjs/toolkit'
import mycounterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    mycount: mycounterReducer,
  },
})