import { createSlice } from "@reduxjs/toolkit";

const hamSlice = createSlice({
  name: "ham",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu :(state)=>{
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu , closeMenu } = hamSlice.actions;
export default hamSlice.reducer;
