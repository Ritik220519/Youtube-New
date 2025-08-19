import { configureStore } from "@reduxjs/toolkit";
import hamSlice from "./hamSlice";
import searchCacheSlice from "./searchCacheSlice";
const store = configureStore({
  reducer: {
    hamReducer: hamSlice,
    searchCache : searchCacheSlice
  },
});

export default store;
