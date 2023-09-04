import { ICreatePostData, IPost } from 'common-types';
import { baseApi } from './baseApi';
import { Socket, io } from 'socket.io-client';

let socket: Socket;
function getSocket() {
  if (!socket) {
    socket = io(import.meta.env.VITE_API_WS_URL);
  }
  return socket;
}

const apiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ['Posts', 'Tag'] });

const postsApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<IPost, ICreatePostData>({
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
    }),
    getAllPosts: build.query<IPost[], void>({
      query: () => ({
        url: 'post',
      }),
      async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
        const socket = getSocket();
        socket.on('disconnect', (reason) => {
          if (reason === 'io server disconnect') {
            socket.connect();
          }
        });
        socket.on('getPosts', (event) => {
          updateCachedData((draft) => {
            draft.unshift(event);
          });
        });
        await cacheEntryRemoved;
        socket.close();
      },
    }),
    getAllUserPosts: build.query<{ posts: IPost[]; count: number }, number>({
      query: (userId) => ({
        url: `post/user/${userId}`,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetAllPostsQuery, useGetAllUserPostsQuery } = postsApi;
