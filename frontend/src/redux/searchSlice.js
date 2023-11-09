import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: null,
  reducers: {
    setSearchApi: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setSearchApi } = searchSlice.actions;

export default searchSlice.reducer;
