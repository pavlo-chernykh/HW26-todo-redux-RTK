import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todoReducer from './todoSlice';
import { userAuthApi } from "./userAuthApi";
import { todoApi } from "./todoApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    todo: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware).concat(todoApi.middleware)
})