import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";
import axios from "axios"

const initialState = {
    brews:[],
    errors:null
}
export const brewsSlice = createSlice({
    name:"brews",
    initialState:{
        brews:[],
        errors:null
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(getBrews.fulfilled, (state, action)=>{
            state.brews = action.payload
            state.errors = null
        })
        .addCase(getBrews.rejected, (state, action)=>{
         
            state.brews = []
            state.errors = action.error
        })
        .addCase(deleteBrew.fulfilled,(state, action)=>{
            state.brews = state.brews.beers.filter(
                (brew) => brew.id !== action.payload
            )
            state.errors = null
        })
        .addCase(deleteBrew.rejected,(state, action)=>{})
    }
})
export const getBrews = createAsyncThunk(
    "brews/getBrews",
    async(breweryId, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/beers/${breweryId}`,{
            headers: {
                "Content-Type": "application/json",
              },
        })
        if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
          }
          const data = await response.json();
          return data;

    })
export const deleteBrew = createAsyncThunk(
    "brews/deleteBrews",
    async(beerId, {rejectWithValue})=>{
        const response = await csrfFetch(
            `/api/beers/${+beerId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
          }
          return beerId;
    }
)
    export default brewsSlice.reducer;