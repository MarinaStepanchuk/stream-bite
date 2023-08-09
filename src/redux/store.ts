import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
