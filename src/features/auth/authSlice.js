import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const url = "/api/v1/login";
      const { email, password } = userData;

      const res = await axios.post(url, { email, password });
      console.log(res, "res");
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loadUser = createAsyncThunk("auth/loaduser", async (thunkAPI) => {
  try {
    const url = `/api/v1/me`;
    const { data } = await axios.get(url);
    return data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});
export const { clearError } = authSlice.actions;
export default authSlice.reducer;
