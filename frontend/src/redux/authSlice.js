import { createSlice } from '@reduxjs/toolkit';

// global state for userAuth
const initialState = {
    user: null,
    loginPageOpen: false,
};

// Reducer
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginPageOpen: (state, action) => {
            state.loginPageOpen = action.payload;
        },
    },
});

export const { setUser, setLoginPageOpen } = authSlice.actions;

export default authSlice.reducer;