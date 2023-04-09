import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    const res = await axios.get("/api/v1/logout");
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const { name, username, password, email } = userData;
      console.log(userData);
      const { data } = await axios.post("/api/v1/register", {
        name,
        username,
        password,
        email,
      });
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

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

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(logout.fulfilled, (state) => {
      toast.success("Logged out successfully");
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    });
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  },
});
export const { clearError } = authSlice.actions;
export default authSlice.reducer;
