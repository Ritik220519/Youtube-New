import { createSlice } from "@reduxjs/toolkit";

const mostPopularVideos = createSlice({
    name : "videos",
    initialState :null,
    reducers : {
       addVideos : (state , action) =>{
       return  state = action.payload
       } 
    }
})

export const {addVideos} = mostPopularVideos.actions;
export default mostPopularVideos.reducer