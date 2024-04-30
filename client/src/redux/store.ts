import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice"
import topNavReducer from "./features/topNavbar/topNavbarSlice";
import sidenavSlice from "./features/SideNav/sidenavSlice";
import predictionResultReducer from "./features/predictionResult/predictionResultSlice";
const store = configureStore({
  reducer: {
    modalForm: modalReducer,
    topNav:topNavReducer,
    sideNav: sidenavSlice,
    predictionResult:predictionResultReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
