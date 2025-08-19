import { createSlice } from "@reduxjs/toolkit";

const searchChacheSlice = createSlice({
    name: "searchCache" ,
    initialState : {},
    reducers : {
        cacheResults : (state , action) =>{
         state = Object.assign(state , action.payload);

        }
    }
})
export const {cacheResults} = searchChacheSlice.actions
export default searchChacheSlice.reducer;
