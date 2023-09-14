import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithGoogle,
  logout,
  signIn,
  register,
} from "../firebase/firebase";

const initialState = {
  user: null,
};

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, thunkApi) => {
    const {
      user: { uid, email, displayName },
    } = await signInWithGoogle();
    const user = { uid, email, displayName };
    thunkApi.dispatch(setUser(user));
  }
);

export const logoutFromApp = createAsyncThunk(
  "auth/logoutFromApp",
  async (_, thunkApi) => {
    await logout();
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email: userEmail, password }, thunkApi) => {
    const {
      payload: {
        user: { uid, email, displayName },
      },
    } = await register(userEmail, password);

    return { uid, email, displayName };
  }
);

export const signInUser = createAsyncThunk(
  "auth/signIn",
  async ({ email: userEmail, password }, thunkApi) => {
    const {
      user: { uid, email, displayName },
    } = await signIn(userEmail, password);

    return { uid, email, displayName };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [logoutFromApp.fulfilled]: (state) => {
      state.user = null;
    },
    [logoutFromApp.rejected]: (state) => {
      state.user = null;
    },
    [registerUser.fulfilled]: (state, userData) => {
      state.user = userData.payload;
    },
    [signInUser.fulfilled]: (state, userData) => {
      state.user = userData.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
