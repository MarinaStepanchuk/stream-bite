import { IPost } from 'common-types';
import { baseApi } from './baseApi';

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ['Posts'] });

const postsApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<{ post: IPost }, Blob>({
      query: (video) => {
        const form = new FormData();
        form.append('file', video);
        return {
          url: '/post',
          method: 'POST',
          body: form,
        };
      },
      invalidatesTags: ['Posts'],
    }),
    getAllPosts: build.query<IPost[], void>({
      query: () => ({
        url: 'post',
      }),
      providesTags: ['Posts'],
    }),
  }),
});

export const { useCreatePostMutation, useGetAllPostsQuery } = postsApi;
