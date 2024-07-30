import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navigation",
  initialState: {
    title: "YamuBlogs",
    icon: "blog",
    animation: { opacity: 1, x: 0 }, 
  },
  reducers: {
    setBlogView: (state) => {
      state.title = "Your Blogs";
      state.icon = "check";
      state.animation = { opacity: 1, x: 0 };
    },
    setDefaultView: (state) => {
      state.title = "YamuBlogs";
      state.icon = "blog";
      state.animation = { opacity: 1, x: 0 };
    },
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});

export const { setBlogView, setDefaultView, setAnimation } = navSlice.actions;
export default navSlice.reducer;
