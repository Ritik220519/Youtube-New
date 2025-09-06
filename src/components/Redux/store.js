import { configureStore } from "@reduxjs/toolkit";
import hamSlice from "./hamSlice";
import searchCacheSlice from "./searchCacheSlice";
import chatLive from "./chatLive"
import searchSuggestionVideo from "./searchSuggestionVideo"
import mostPopularVideos from "./mostPopularVideos"
const store = configureStore({
  reducer: {
    hamReducer: hamSlice,
    searchCache : searchCacheSlice,
    chat : chatLive,
    searchVideo : searchSuggestionVideo,
    videos : mostPopularVideos

  },
});

export default store;
