import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";
import axios from "axios";
import Cookies from "js-cookie";

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    allImages: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImg.fulfilled, (state, action) => {
        state.allImages = action.payload;
        state.error = null;
      })
      .addCase(getImg.rejected, (state, action) => {
        state.allImages = null;
        state.error = action.payload.errors;
      })
      .addCase(createImg.fulfilled, (state, action) => {
        state.allImages.push(action.payload);
        state.error = null;
      })
      .addCase(createImg.rejected, (state, action) => {
        state.error = action.payload.errors;
      })
      .addCase(deleteImg.fulfilled, (state, action) => {
        state.allImages = state.allImages.filter(
          (img) => img.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteImg.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const createImg = createAsyncThunk(
  "images/createImage",
  async ({ breweryId, image }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      if (image) formData.append("image", image);
      const response = await axios.post(`/api/photos/${breweryId}`, formData, {
        headers: {
          "XSRF-Token": Cookies.get("XSRF-TOKEN"),
        },
      });
      if (response.data) return response.data;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data.errors });
    }
  }
);
export const getImg = createAsyncThunk(
  "images/getImage",
  async ({ breweryId }, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/photos/${+breweryId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    return data;
  }
);

export const deleteImg = createAsyncThunk(
  "images/deleteImages",
  async (fileId, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/photos/${fileId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errData = await response.json();

      return rejectWithValue(errData);
    }
    return fileId;
  }
);

export default imageSlice.reducer;
