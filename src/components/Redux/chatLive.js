import { createSlice } from "@reduxjs/toolkit";
import { COUNT_LIVE_CHAT } from "../utils/constant";

const chatLive = createSlice({
    name : "chat" , 
    initialState :{
        message : [],
    },
    reducers : {
        addmessage : (state , action) =>{
            state.message.splice(COUNT_LIVE_CHAT , 1)
            state.message.unshift(action.payload);
        }
    }
})
export const {addmessage} = chatLive.actions;
export default chatLive.reducer