import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import videoSlice from "./videoSlice"
import searchSlice from "./searchSlice"
import liveChatSlice from "./liveChatSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
        search: searchSlice,
        liveChat: liveChatSlice
    }
})

export default appStore;