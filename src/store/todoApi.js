import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://todo.hillel.it'}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (token) => ({
        url: '/todo',
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ token }`,
        }
      }),
      providesTags: (result) => result
        ? [
            ...result.map(({ _id }) => ({ type: 'Todos', _id })),
            { type: 'Todos', _id: 'LIST' },
          ]
        : [{ type: 'Todos', _id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: ({text, token}) => ({
        url: '/todo',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ token }`,
        },
        body: {value: text, priority: 1}
      }),
      invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
    }),
    deleteTodo: builder.mutation({
      query: ({id, token}) => ({
        url: `/todo/${ id }`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ token }`,
        }
      }),
      invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
    }),
    toggleTodo: builder.mutation({
      query: ({id, token}) => ({
        url: `/todo/${ id }/toggle`,
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ token }`,
        }
      }),
      invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
    }),
    updateTodo: builder.mutation({
      query: ({id, value, token}) => ({
          url: `/todo/${ id }`,
          method: 'PUT',
          headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${ token }`,
          },
          body: JSON.stringify({value, priority: 1}),
      }),
      invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
  }),
  })
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoMutation, useUpdateTodoMutation } = todoApi;