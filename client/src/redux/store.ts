import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice"
import topNavReducer from "./features/topNavbar/topNavbarSlice";
import sidenavSlice from "./features/SideNav/sidenavSlice";

const store = configureStore({
  reducer: {
    modalForm: modalReducer,
    topNav:topNavReducer,
    sideNav: sidenavSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
