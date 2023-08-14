import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import { baseApi } from './services/baseApi';

export const store = configureStore({
  reducer: {
    userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
