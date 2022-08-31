import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://todo.hillel.it'}),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({email}) => ({
        url: '/auth/login',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: {value: email}
      }),
      providesTags: ['User']
    })
  })
})

export const { useGetTokenMutation } = userAuthApi;