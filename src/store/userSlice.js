import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isAuthed: false
  },
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload.token;
    },
    setAuth: (state, {payload}) => {
      state.isAuthed = payload.isAuthed;
    }
  }
})

export const { setToken, setAuth } = userSlice.actions

export default userSlice.reducer;