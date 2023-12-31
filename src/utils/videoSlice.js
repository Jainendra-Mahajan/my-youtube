import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoList: [],
        searchVideoList: [],
        musicVideoList: [],
        sportsVideoList: [],
        learningVideoList: [],
        commentList: []
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
        },

        addCommentsForVideo: (state, action) => {
            state.commentList = action.payload
        },

        addMusicVideoList: (state, action) => {
            state.musicVideoList = action.payload;
        },
        addSportsVideoList: (state, action) => {
            state.sportsVideoList = action.payload;
        },
        addLearningVideoList: (state, action) => {
            state.learningVideoList = action.payload;
        }

    }
});

export const { addVideos, addSearchVideoList, removeSearchVideos, addMusicVideoList, addSportsVideoList, addLearningVideoList, addCommentsForVideo } = videoSlice.actions;
export default videoSlice.reducer;