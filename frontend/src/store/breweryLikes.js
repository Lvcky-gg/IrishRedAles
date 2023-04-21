import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";

const initialState = {
    breweryLikes: [],
}
export const breweryLikeSlice = createSlice({
    name:'breweryLikes',
    initialState,
    reducers: {
        clearBreweryLikes: () => {
            state.breweryLikes = []
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBreweryLikes.fulfilled, (state, action) => {

            state.breweryLikes = action.payload;
        })
        .addCase(getBreweryLikes.rejected, (state, action) => {

        })

        .addCase(createBreweryLike.fulfilled, (state, action) => {
            state.breweryLikes.push(action.payload);
        })
        .addCase(createBreweryLike.rejected, (state, action) => {

        })
        .addCase(deleteBreweryLike.fulfilled, (state, action) => {
            state.breweryLikes = state.breweryLikes.filter(
                (like) => like.id !== action.payload
            );
        })
        .addCase(deleteBreweryLike.rejected, (state, action) => {

        });
    }
})
export const getBreweryLikes = createAsyncThunk(
    'breweryLikes/getbreweryLikes',
    async({breweryId}, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/brewery-likes/${breweryId}`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
        }
        const data = await response.json();
        return data.breweryLikes;
        }
);
export const deleteBreweryLike = createAsyncThunk(
    'breweryLikes/deleteBreweryLike',
    async({breweryId, likeId}, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/brewery-likes/${breweryId}/${likeId}`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
        }
        return likeId;
        }
)
export const createBreweryLike = createAsyncThunk(
    'breweryLikes/createBreweryLike',
    async ({ userId,breweryLikeId, breweryId }, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/brewery-likes/${breweryLikeId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, breweryId}),
        });
        const data = await response.json();
        if (!response.ok) {
            return rejectWithValue(data);
        }
        return data;
    }

)
export const {clearBreweryLikes} = breweryLikeSlice.actions
export default breweryLikeSlice.reducer