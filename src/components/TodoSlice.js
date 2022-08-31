import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: false
      });
    },
    remove: (state) => {
      // state.value -= 1;
    }
  }
});

export const { add, remove } = todosSlice.actions;

export default todosSlice.reducer;
