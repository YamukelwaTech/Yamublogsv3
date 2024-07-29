import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://blogbackend-yy9j.onrender.com";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(`${backendUrl}/posts`);
  return response.data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: true,
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
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { logBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
