import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setApi: (state, action) => {
            return !state;
        },
    },
});

export const { setApi } = apiSlice.actions;

export default apiSlice.reducer;