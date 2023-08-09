import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginForm, IUser } from 'types/userInterface';

const baseUrl = 'http://localhost:5000/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    registerUser: build.mutation<IUser, ILoginForm>({
      query: ({ email, password }) => ({
        url: '/register',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
