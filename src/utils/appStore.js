import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import videoSlice from "./videoSlice"
import searchSlice from "./searchSlice"

const appStore = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
        search: searchSlice
    }
})

export default appStore;