import { configureStore } from '@reduxjs/toolkit';
import clienteReducer from './clienteReducer';

export const store = configureStore({
  reducer: {
    cliente: clienteReducer
  }
})

export const RootState = store.getState;