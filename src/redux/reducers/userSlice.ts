import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'common-types/userInterface';
import { getTokenFromLocalStorage } from '../../utils/localStorageHelpers';

interface IInitialStateUserSlice {
  isAuth: boolean;
  user: IUser | null;
}

export const initialState: IInitialStateUserSlice = {
  isAuth: !!getTokenFromLocalStorage(),
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      const { id, name, email } = action.payload;
      state.user = { id, name, email };
      state.isAuth = true;
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
