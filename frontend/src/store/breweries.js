import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";
import axios from "axios";
import Cookies from "js-cookie";

export const brewerySlice = createSlice({
  name: "breweries",
  initialState: {
    allBreweries: [],
    error: null,
    displayedBreweries: [],
    validationErrors: null,
  },
  reducers: {
    sortBreweriesByNewest(state) {
      state.displayedBreweries = [...state.allBreweries].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.createSlice);
      });
    },
    sortBreweriesByRating(state) {
      state.displayedBreweries = [...state.allBreweries].sort((a, b) => {
        return b.rating - a.rating;
      });
    },
    updateBreweriesAfterVote(state, action) {
      const updatedBreweries = action.payload;
      const idx = state.allBreweries.findIndex(
        (brewery) => brewery.id === updatedBreweries.id
      );
      state.allBreweries[idx] = updatedBreweries;
    },
    clearBrewErrors: (state) => {
      state.error = null;
      state.validationErrors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBreweries.fulfilled, (state, action) => {
        state.allBreweries = action.payload;
        state.error = null;
        state.displayedBreweries = action.payload;
      })
      .addCase(getAllBreweries.rejected, (state, action) => {})
      .addCase(createBrewery.fulfilled, (state, action) => {
        console.log(action);
        state.allBreweries.push(action.payload);
        state.displayedBreweries.push(action.payload);
        state.validationErrors = null;
        state.error = null;
      })
      .addCase(createBrewery.rejected, (state, action) => {
        state.validationErrors = action.payload.errors;
        state.error = action.payload.errors;
      })
      .addCase(deleteBrewery.fulfilled, (state, action) => {
        state.allBreweries = state.allBreweries.filter(
          (brewery) => brewery.id === action.payload
        );
        state.error = null;
      })
      .addCase(deleteBrewery.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(filterBreweries.fulfilled, (state, action) => {
        state.allBreweries = [...action.payload];
        state.error = null;
      })
      .addCase(filterBreweries.rejected, (state, action) => {
        state.error = action.payload.error;
        state.allBreweries = [];
      })
      .addCase(updateBreweries.fulfilled, (state, action) => {
        
        const updateBrewery = action.payload;
        const idx = state.allBreweries.findIndex(
          (brewery) => brewery.id === updateBrewery.id
        );
        state.allBreweries[idx] = updateBrewery;
        state.error = null;
        state.validationErrors = null
      })
      .addCase(updateBreweries.rejected, (state, action) => {
        state.validationErrors = action.payload.errors;
        state.error = action.payload.errors;
      });
  },
});

export const getAllBreweries = createAsyncThunk(
  "breweries/getAllbreweries",
  async (_, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/breweries`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    return data.Breweries;
  }
);
export const getABrewery = createAsyncThunk(
  "brewery/getAbrewery",
  async ({ breweryId }, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/breweries${breweryId}`, {
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
export const createBrewery = createAsyncThunk(
  "breweries/createBreweries",
  async (
    {
      breweryName,
      description,
      addressLineOne,
      zip,
      city,
      state,
      country,
      lat,
      lng,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "/api/breweries",
        JSON.stringify({
          breweryName,
          description,
          city,
          addressLineOne,
          zip,
          state,
          country,
          lat,
          lng,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "XSRF-Token": Cookies.get("XSRF-TOKEN"),
          },
        }
      );

      if (response.data) return response.data;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data.errors });
    }
  }
);

export const filterBreweries = createAsyncThunk(
  "breweries/filterBreweries",
  async (parameter, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/breweries${parameter}`);
    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    const data = await response.json();

    return data.Breweries;
  }
);

export const deleteBrewery = createAsyncThunk(
  "breweries/deleteBreweries",
  async (breweryId, { rejectWithValue }) => {
    const response = await csrfFetch(`/api/breweries/${breweryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errData = await response.json();

      return rejectWithValue(errData);
    }

    return breweryId;
  }
);

export const updateBreweries = createAsyncThunk(
  "breweries/updateBrewery",
  async (
    {
      breweryName,
      description,
      addressLineOne,
      zip,
      state,
      country,
      lat,
      lng,
      city,
      breweryId,
    },
    
    { rejectWithValue }
  ) => {
    try{
    const response = await axios.put(`/api/breweries/${breweryId}`, 
    JSON.stringify({
        breweryName,
        description,
        addressLineOne,
        zip,
        state,
        country,
        lat,
        lng,
        city
      }),
    {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
    });
  

    if (response.data) return response.data;
} catch (error) {
  return rejectWithValue({ errors: error.response.data.errors });
}

  }
);

export const {
  sortBreweriesByNewest,
  sortBreweriesByRating,
  updateBreweriesAfterVote,
  clearBrewErrors,
} = brewerySlice.actions;

export default brewerySlice.reducer;
