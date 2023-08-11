import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'common-types/userInterface';

interface IInitialStateUserSlice {
  isAuth: boolean;
  user: IUser;
}

export const initialState: IInitialStateUserSlice = {
  isAuth: false,
  user: {
    id: 0,
    email: '',
    name: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
