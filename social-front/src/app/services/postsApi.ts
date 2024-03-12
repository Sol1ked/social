import { Post } from "../types"
import { api } from "./api"

export const postApi = api.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<Post, { content: string }>({
      query: postData => ({
        url: "/posts",
        method: "POST",
        body: postData,
      }),
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: postId => ({
        url: `/posts/${postId}`,
        method: "GET",
      }),
    }),
    deletePost: builder.mutation<Post, string>({
      query: postId => ({
        url: `posts/${postId}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} = postApi

export const {
  endpoints: { createPost, getAllPosts, getPostById, deletePost },
} = postApi