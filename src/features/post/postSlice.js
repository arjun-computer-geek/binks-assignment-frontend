import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};
export const createPost = createAsyncThunk(
  "post/create",
  async (postData, thunkAPI) => {
    const { description } = postData;
    try {
      const { data } = await axios.post("/api/v1/post/create", { description });
      return data.post;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "post/getAllPost",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get("/api/v1/posts");
      return data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      toast.success("Post created successfully");
      state.loading = false;
      state.posts = [action.payload, ...state.posts];
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
