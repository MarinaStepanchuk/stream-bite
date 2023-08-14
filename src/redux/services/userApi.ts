import { ILoginForm, IRegisterForm, IUser, IUserDataResponse } from '../../common-types/index';
import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<{ user: IUser }, IRegisterForm>({
      query: ({ email, password, name }) => ({
        url: '/user',
        method: 'POST',
        body: {
          email,
          name,
          password,
        },
      }),
    }),
    signin: build.mutation<IUserDataResponse, ILoginForm>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useSigninMutation } = userApi;
