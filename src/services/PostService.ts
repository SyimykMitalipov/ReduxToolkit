import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPosts } from './IPosts'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[],number>({
            query: (limit = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPosts , IPosts>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post,
            }),
            invalidatesTags: result => ['Post']
        }),
        updatePost: build.mutation<IPosts , IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: result => ['Post']
        }),
        deletePost: build.mutation<IPosts , IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: result => ['Post']
        }),
    })
})