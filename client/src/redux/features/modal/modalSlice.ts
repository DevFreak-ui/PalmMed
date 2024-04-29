import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  formModal_isOpen: boolean,
  predictionResultsModal_isOpen:boolean,
  viewPatientDetailsModal_isOpen: boolean,
  editPatientDetailsModal_isOpen: boolean,
  
  
  
}

const initialState: InitialState = {
  formModal_isOpen: false,
  predictionResultsModal_isOpen:false,
  viewPatientDetailsModal_isOpen: false,
  editPatientDetailsModal_isOpen: false,
  
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
    openPredictionResultsModal: (state) => {
      state.predictionResultsModal_isOpen = true;
    },
    closePredictionResultsModal: (state) => {
      state.predictionResultsModal_isOpen = false;
    },
    openViewPatientDetailsModal: (state) => {
      state.viewPatientDetailsModal_isOpen = true
    },
    closeViewPatientDetailsModal: (state) => {
      state.viewPatientDetailsModal_isOpen = false
    },
    openEditPatientDetailsModal: (state) => {
      state.editPatientDetailsModal_isOpen = true
    },
    closeEditPatientDetailsModal: (state) => {
      state.editPatientDetailsModal_isOpen = false
    }

    
  },
});

export default modalSlice.reducer;
export const {
  openFormModal,closeFormModal,openViewPatientDetailsModal,closeViewPatientDetailsModal,openEditPatientDetailsModal,closeEditPatientDetailsModal
} = modalSlice.actions;
