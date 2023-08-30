import { ISubscriptionData } from '../../common-types/subscriptionInterface';
import { ILoginForm, IRegisterForm, IUser, IUserDataResponse } from '../../common-types/index';
import { baseApi } from './baseApi';

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ['Subscription'] });

const userApi = apiWithTag.injectEndpoints({
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
    getUserById: build.query<IUser, number>({
      query: (id) => ({
        url: `/user/${id}`,
      }),
    }),
    subscribe: build.mutation<boolean, number>({
      query: (authorId) => ({
        url: 'subscription',
        method: 'POST',
        body: {
          authorId,
        },
      }),
      invalidatesTags: ['Subscription'],
    }),
    unsubscribe: build.mutation<boolean, number>({
      query: (authorId) => ({
        url: `subscription/${authorId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Subscription'],
    }),
    getSubscribers: build.query<ISubscriptionData, number>({
      query: (authorId) => ({
        url: `subscription/${authorId}`,
      }),
      providesTags: ['Subscription'],
    }),
    getFeeds: build.query<ISubscriptionData, number>({
      query: (subscriberId) => ({
        url: `subscription/feeds/${subscriberId}`,
      }),
      providesTags: ['Subscription'],
    }),
    checkSubscription: build.query<boolean, { subscriberId: number; authorId: number }>({
      query: ({ subscriberId, authorId }) => ({
        url: `subscription?subscriberId=${subscriberId}&authorId=${authorId}`,
      }),
      providesTags: ['Subscription'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useSigninMutation,
  useGetUserByIdQuery,
  useSubscribeMutation,
  useUnsubscribeMutation,
  useGetSubscribersQuery,
  useGetFeedsQuery,
  useCheckSubscriptionQuery,
} = userApi;
