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
        .addCase(getImg.fulfilled, (state, action)=>{
            state.allImages = action.payload
            state.error=null
        })
        .addCase(getImg.rejected, (state, action)=>{
            state.allImages = null
            state.error=action.payload.errors;
        })
        .addCase(createImg.fulfilled, (state, action) => {
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
            const response = await axios.post(
                `/api/photos/${breweryId}`,
                formData,{
                    headers:{
                        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                    }
                }
            )
            console.log(response.data)
            if (response.data) return response.data;
            // if (response) return response
        }catch(error){
            return rejectWithValue({errors:error.response.data.errors})
        }
    }
)
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
)

export default imageSlice.reducer