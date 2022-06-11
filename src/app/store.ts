import { configureStore } from '@reduxjs/toolkit';

import plantReducer from './plantSlice';
import { plantsApi } from './services/plants';

export function makeStore() {
  return configureStore({
    reducer: {
      plant: plantReducer,
      [plantsApi.reducerPath]: plantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(plantsApi.middleware),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
