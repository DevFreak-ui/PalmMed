import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  result: [],
  error: "",
};


export const getResult = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .post("https://7588-41-66-228-33.ngrok-free.app/api/v1/llm/predict",)
    .then((response) => {
      return response.data.map((user) => user.id);
    });
});

const userSlice = createSlice({
  name: "user",
    initialState,
  reducers:{},
  extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state, action) => {
        state.result = action.
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
        state.result = action.payload
        state.error = ""
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
     state.result =""
        state.error = action.error.message
    });
  },
});

export default userSlice.reducer;

