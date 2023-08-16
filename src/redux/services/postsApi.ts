import { baseApi } from './baseApi';

interface IPost {
  id: number;
  video: Blob;
}

const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<{ post: IPost }, Blob>({
      query: (video) => {
        const form = new FormData();
        form.append('file', video);
        console.log(video);
        return {
          url: '/post',
          method: 'POST',
          body: form,
        };
      },
    }),
  }),
});

export const { useCreatePostMutation } = postsApi;
