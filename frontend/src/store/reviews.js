import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import Cookies from "js-cookie";
import { csrfFetch } from './csrf';

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        allReviews: [],
        validationErrors:[]
    },
    reducers: {
        updateReviewAfterVote(state, action) {
            const updatedReview = action.payload;
            const idx = state.allReviews.findIndex(
                (review) => review.id === updatedReview.id
            );
            state.allReviews[idx] = updatedReview;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllReviews.fulfilled, (state, action) => {
                state.allReviews = action.payload;
            })
            .addCase(getReviewsByBrewery.fulfilled, (state, action) => {
                state.allReviews = action.payload;
            })
            .addCase(getReviewsByBrewery.rejected, (state, action) => {
                state.allReviews = [];
            })
            .addCase(createReveiwByBrewery.fulfilled, (state, action) => {
                const createdReview = action.payload;

                state.allReviews.push(createdReview);
            })
            .addCase(createReveiwByBrewery.rejected, (state, action) => {
                state.validationErrors = action.payload.errors;
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                const updatedReview = action.payload;
                const idx = state.allReviews.findIndex(
                    (review) => review.id === updatedReview.id
                );
                state.allReviews[idx] = updatedReview;
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.allReviews = state.allReviews.filter(
                    (review) => review.id === action.payload
                );
            });
    },
});

export const getAllReviews = createAsyncThunk(
    'reviews/getAllReviews',
    async (_, { rejectWithValue }) => {
        const response = await csrfFetch('/api/reviews', {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            rejectWithValue(await response.json());
        }

        const data = await response.json();

        return data.reviews;
    }
);

export const getReviewsByBrewery = createAsyncThunk(
    'reviews/getReviewsByBrewery',
    async (breweryId, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/breweries/${breweryId}/reviews`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            rejectWithValue(await response.json());
        }

        const data = await response.json();
        return data.reviews;
    }
);

export const createReveiwByBrewery = createAsyncThunk(
    'reviews/createReveiwByBrewery',
    async ({ description, breweryId, rating }, { rejectWithValue }) => {
   try{
        const response = await axios.post(
            `/api/breweries/${breweryId}/reviews`,
            JSON.stringify({description, rating}),
            {
                headers: {
                  "Content-Type": "application/json",
                  "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                }
            }
        )
        if(response.data)return response.data
    }catch (error){
        return rejectWithValue({errors:error.response.data.errors})
    }
}
);

export const updateReview = createAsyncThunk(
    'breweries/updateReview',
    async ({ details, reviewId }, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });
        if (!response.ok) {
            rejectWithValue(await response.json());
        }

        const data = await response.json();

        return data;
    }
);
export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            rejectWithValue(await response.json());
        }

        const data = await response.json();

        return data.reviews;
    }
);
export const { updateReviewAfterVote } = reviewSlice.actions;
export default reviewSlice.reducer;