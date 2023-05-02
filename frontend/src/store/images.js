import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";
import axios from "axios";
import Cookies from "js-cookie";


export const imageSlice = createSlice({
    name:"images",
    initialState: {
        allImages:[],
        error:null
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(createImg.fulfilled, (state, action) => {
            console.log(action.payload)
            state.allImages.push(action.payload);
            state.error = null
        })
        .addCase(createImg.rejected, (state, action) => {
            state.error = action.payload.errors;
        })
    }
})

export const createImg = createAsyncThunk(
    "images/createImage",
    async (
        {
            breweryId,
            image
        },
        {rejectWithValue}
    ) => {
        try {
            const formData = new FormData();
            if (image) formData.append("image", image);
            const response = axios.post(
                `/api/photos/${breweryId}`,
                formData,{
                    headers:{
                        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                    }
                }
            )
            if (response.data) return response.data;
        }catch(error){
            return rejectWithValue({errors:error.response.data.errors})
        }
    }
)

export default imageSlice.reducer