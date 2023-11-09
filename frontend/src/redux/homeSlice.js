import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: null,
  reducers: {
    setHomeApi: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setHomeApi } = homeSlice.actions;

export default homeSlice.reducer;
