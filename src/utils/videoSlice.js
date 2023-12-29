import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoList: [],
        searchVideoList: []
    },
    reducers: {
        addVideos: (state, action) => {
            state.videoList = action.payload;
        },

        addSearchVideoList: (state, action) => {
            state.searchVideoList = action.payload
        },

        removeSearchVideos: (state) => {
            state.searchVideoList = [];
        }

    }
});

export const { addVideos, addSearchVideoList, removeSearchVideos } = videoSlice.actions;
export default videoSlice.reducer;