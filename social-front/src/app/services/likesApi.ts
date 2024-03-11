import { Like } from "../types"
import { api } from "./api"

export const likesApi = api.injectEndpoints({
  endpoints: builder => ({
    likePost: builder.mutation<Like, Partial<Like>>({
      query: newLike => ({
        url: "/commments",
        method: "POST",
        body: newLike,
      }),
    }),
    unlikePost: builder.mutation<void, string>({
      query: likeId => ({
        url: `/commments/${likeId}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useLikePostMutation, useUnlikePostMutation } = likesApi

export const {
  endpoints: { likePost, unlikePost },
} = likesApi
