import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navigation",
  initialState: {
    title: "YamuBlogs",
    icon: "blog",
  },
  reducers: {
    setBlogView: (state) => {
      state.title = "Your Blogs";
      state.icon = "check";
    },
    setDefaultView: (state) => {
      state.title = "YamuBlogs";
      state.icon = "blog";
    },
  },
});

export const { setBlogView, setDefaultView } = navSlice.actions;
export default navSlice.reducer;
