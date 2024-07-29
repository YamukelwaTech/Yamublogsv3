import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://blogbackend-yy9j.onrender.com";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { getState }) => {
    const { blogs } = getState().blogs;
    if (blogs.length === 0) {
      const response = await axios.get(`${backendUrl}/posts`);
      return response.data;
    }
    return [];
  }
);

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (newBlog) => {
    const response = await axios.post(`${backendUrl}/posts`, newBlog);
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
    logged: false,
  },
  reducers: {
    logBlogs: (state) => {
      state.blogs.forEach((blog) => {
        console.log("Token:", blog.token);
      });
      state.logged = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.blogs = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
