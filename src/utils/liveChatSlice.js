import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers: {
        addLiveChatMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.unshift(action.payload);

        }
    }
});

export const { addLiveChatMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;