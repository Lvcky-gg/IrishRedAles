import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";

const initialState = {
    reviewLikes: [],
}
export const reviewLikeSlice = createSlice({
    name:'reviewLikes',
    initialState,
    reducers: {
        clearReviewLikes: (state) => {
            state.reviewLikes = []
        },
    },
    extraReducers:(builder) => {
        builder
        // .addCase(getReviewLikes.fulfilled, (state, action) => {
        //     state.reviewLikes = [...state.reviewLikes, ...action.payload].sort((a,b) =>a.id-b.id);
        // })
        // .addCase(getReviewLikes.rejected, (state, action) => {

        // })
        .addCase(getAllReviewLikes.fulfilled, (state, action) => {
            state.reviewLikes = action.payload;
        })
        .addCase(getAllReviewLikes.rejected, (state, action) => {
            state.reviewLikes = [];
        })

        .addCase(createReviewLike.fulfilled, (state, action) => {
            
            state.reviewLikes.push(action.payload);
        })
        .addCase(createReviewLike.rejected, (state, action) => {

        })
        .addCase(deleteReviewLike.fulfilled, (state, action) => {
            state.reviewLikes = state.reviewLikes.filter(
                (like) => like.id !== action.payload
            );
        })
        .addCase(deleteReviewLike.rejected, (state, action) => {

        });
    }
})
export const getReviewLikes = createAsyncThunk(
    'reviewLikes/getReviewLikes',
    async({reviewId}, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/review-likes/${reviewId}`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
        }
        const data = await response.json();
        return data;
        }
);
export const getAllReviewLikes = createAsyncThunk(
    'reviewLikes/getReviewLikes',
    async(_, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/review-likes`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errData = await response.json();
            return rejectWithValue(errData);
        }
        const data = await response.json();
        return data;
        }
);
export const deleteReviewLike = createAsyncThunk(
    'reviewLikes/deleteReviewLike',
    async({reviewId, likeId}, {rejectWithValue}) => {
        const response = await csrfFetch(`/api/review-likes/${reviewId}/${likeId}`,{
            method:'DELETE',
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
export const createReviewLike = createAsyncThunk(
    'reviewLikes/createReviewLike',
    async ({ userId, reviewId }, { rejectWithValue }) => {
        const response = await csrfFetch(`/api/review-likes/${reviewId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, reviewId}),
        });
        const data = await response.json();
        if (!response.ok) {
            return rejectWithValue(data);
        }
        return data;
    }

)
export const {clearReviewLikes} = reviewLikeSlice.actions
export default reviewLikeSlice.reducer