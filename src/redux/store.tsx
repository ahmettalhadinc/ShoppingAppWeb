import { configureStore } from '@reduxjs/toolkit'
import basket from '../redux/basketSlice.tsx'

export const store = configureStore({
  reducer: {

    basket:basket
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
