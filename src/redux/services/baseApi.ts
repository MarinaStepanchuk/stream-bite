import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '../../utils/localStorageHelpers';
import { ICustomError } from '../../common-types/index';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError>,
  endpoints: () => ({}),
});

export { baseApi };
