import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reportId: "1w3e2r3r",
};

const reportIdSlice = createSlice({
  name: "reportId",
  initialState,
  reducers: {
    updateReportId: (state, action) => {
      state.reportId = action.payload;
    },
  },
});

export default reportIdSlice.reducer;
export const { updateReportId } = reportIdSlice.actions
