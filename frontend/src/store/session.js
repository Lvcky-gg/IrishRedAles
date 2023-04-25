import { csrfFetch } from "./csrf";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    error: null,
    validationErrors: null,
    redirectMessage: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    clearErrors: (state) => {
      state.error = null;
      state.validationErrors = null;
    },
    setRedirectMessage: (state, action) => {
      state.redirectMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.validationErrors = null;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
        state.error = action.payload.errors;
        state.validationErrors = action.payload.errors;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(signUp.pending, (state) => {
        state.error = null;
        state.validationErrors = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.validationErrors = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload.errors;
        state.validationErrors = action.payload.errors;
        state.user = null;
      });
  },
});

export const authenticate = createAsyncThunk(
  "session/authenticate",
  async () => {
    const response = await csrfFetch("/api/session", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();

      if (data.errors) {
        return;
      }

      return data.user;
    }
  }
);

export const login = createAsyncThunk(
  "session/login",
  async ({ credential, password }, { rejectWithValue }) => {
    try {
      const response = await axios
        .post(
          "/api/session",
          JSON.stringify({
            credential,
            password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "XSRF-Token": Cookies.get("XSRF-TOKEN"),
            },
          }
        )
        .then((res) => res);

      if (response.data.user) return response.data.user;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data.errors });
    }
  }
);

export const logout = createAsyncThunk("session/logout", async () => {
  const response = await csrfFetch("/api/session", {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return true;
  }
});

export const signUp = createAsyncThunk(
  "session/signUp",
  async (
    { firstName, lastName, username, email, password },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios
        .post(
          "/api/users",
          JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "XSRF-Token": Cookies.get("XSRF-TOKEN"),
            },
          }
        )
        .then((res) => res);

      if (response.data.user) return response.data.user;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data.errors });
    }
  }
);

export const { setUser, removeUser, clearErrors, setRedirectMessage } =
  sessionSlice.actions;

export default sessionSlice.reducer;
