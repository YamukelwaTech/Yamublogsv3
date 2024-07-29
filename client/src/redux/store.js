import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";
import navReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    navigation: navReducer,
  },
});
