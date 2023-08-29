import { ICreatePostData, IPost } from 'common-types';
import { baseApi } from './baseApi';

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ['Posts', 'Tag'] });

const postsApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<{ post: IPost }, ICreatePostData>({
      query: ({ video, tags }) => {
        const form = new FormData();
        form.append('file', video);
        form.append('tags', JSON.stringify(tags));
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
