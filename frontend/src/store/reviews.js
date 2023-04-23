import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { csrfFetch } from './csrf';

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        allReviews: [],
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
    async ({ details, breweryId }, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/breweries/${breweryId}/reviews`, {
            method: 'POST',
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