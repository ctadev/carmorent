import { createSlice } from '@reduxjs/toolkit';

// global state
const initialState = {
    currentPage: 'home',
};

// Reducer
const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;