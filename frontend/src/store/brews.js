import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";
import axios from "axios"
import Cookies from "js-cookie";


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
            state.brews.beers = state.brews.beers.filter(
                (brew) => brew.id !== action.payload
            )
            state.errors = null
        })
        .addCase(deleteBrew.rejected,(state, action)=>{})
        .addCase(createBrew.fulfilled, (state, action)=>{

            state.brews.beers.push(action.payload)
            state.errors = null
        })
        .addCase(createBrew.rejected, (state, action)=>{
            state.errors = action.payload.errors;
        })
        .addCase(editBrew.fulfilled, (state, action)=>{
            const updateBeer = action.payload;
            const idx = state.brews.beers.findIndex(
              (beer) => beer.id === updateBeer.id
            );
            state.brews.beers[idx] = updateBeer;
            state.errors = null;
        })
        .addCase(editBrew.rejected, (state, action)=>{
            state.errors = action.payload.errors;
        })
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
export const createBrew = createAsyncThunk(
    "brews/createBrew",
    async({breweryId, name, price}, {rejectWithValue})=>{
        try {
            const response = await axios.post(
                `/api/beers/${+breweryId}`,
                JSON.stringify({name, price}),
                {
                    headers: {
                      "Content-Type": "application/json",
                      "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                    },
                }
            )
            if (response.data) return response.data;
        }catch(error){
            return rejectWithValue({ errors: error.response.data.errors });
        }
    }
)

export const editBrew = createAsyncThunk(
    "brews/editBrew",
    async({beerId, name, price}, {rejectWithValue})=>{
        try {
            const response = await axios.put(
                `/api/beers/${+beerId}`,
                JSON.stringify({name, price}),
                {
                    headers: {
                      "Content-Type": "application/json",
                      "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                    },
                }
            )
            if (response.data) return response.data;
        }catch(error){
            return rejectWithValue({ errors: error.response.data.errors });
        }
    }
)
    export default brewsSlice.reducer;