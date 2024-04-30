import { createSlice } from "@reduxjs/toolkit";
import SideNav from "../../../components/navigations/SideNav";

interface InitialState {
  sideNavIsOpen: boolean
}

const initialState: InitialState = {
    sideNavIsOpen: false
};

const sideNavSlice = createSlice({
  name: "sideNav",
  initialState,
  reducers: {
    toggleSideNav: (state) => {
        state.sideNavIsOpen = !state.sideNavIsOpen;
    },
    
  },
});

export default sideNavSlice.reducer;
export const {
  toggleSideNav
} = sideNavSlice.actions;
