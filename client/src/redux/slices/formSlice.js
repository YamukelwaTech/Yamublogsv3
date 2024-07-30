import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://blogbackend-yy9j.onrender.com";

export const addNewBlog = createAsyncThunk(
  "form/addNewBlog",
  async (newBlog) => {
    const response = await axios.post(`${backendUrl}/posts`, newBlog, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBlog.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default formSlice.reducer;
