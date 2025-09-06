import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionVideo = createSlice({
    name : "searchVideo",
    initialState : null,
    reducers : {
        addSearchVideos : (state , action) =>{
           return state = action.payload;
        }
    }
})

export const {addSearchVideos} = searchSuggestionVideo.actions;
export default searchSuggestionVideo.reducer;