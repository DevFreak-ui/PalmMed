import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  pageTitle: string
}

const initialState: InitialState = {
  pageTitle: "Palmed Doctor Dashboard"
};

const topNavbarSlice = createSlice({
  name: "topNavbar",
  initialState,
  reducers: {
    selectPageTitle: (state, action:PayloadAction<string>) => {
      state.pageTitle=action.payload
    }
   
  },
});

export default topNavbarSlice.reducer;
export const {selectPageTitle } = topNavbarSlice.actions