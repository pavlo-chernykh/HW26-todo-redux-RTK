import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    filter: 'all'
  },
  reducers: {
    setfilter: (state, {payload}) => {
      state.filter = payload.filter;
    }
  }
})

export const { setfilter} = todoSlice.actions

export default todoSlice.reducer;