import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  formModal_isOpen: boolean;
  
}

const initialState: InitialState = {
  formModal_isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openFormModal: (state) => {
      state.formModal_isOpen = true;
    },
    closeFormModal: (state) => {
      state.formModal_isOpen = false;
    },

    
  },
});

export default modalSlice.reducer;
export const {
  openFormModal,closeFormModal
} = modalSlice.actions;
