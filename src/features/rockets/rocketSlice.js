import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get_all_rockets } from "../../API/endpoints";

const initialState = {
    rockets: [],
    isLoading: false,
    isError: false,
    errorMessage: null
}


export const fetchRockets = createAsyncThunk("rocket/fetchRockets", async () => await get_all_rockets());

const rocketSlice = createSlice({
    name: "rocket",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRockets.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchRockets.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.rockets = action.payload.data;
        },
        [fetchRockets.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload)
            state.errorMessage = action.payload
        }
    }
})

export default rocketSlice.reducer;


