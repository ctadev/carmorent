import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carList: [],
    filteredCars: [],
};

const carListSlice = createSlice({
    name: 'carList',
    initialState,
    reducers: {
        setCars: (state, action) => {
            return state.carList = action.payload;
        },
    },
});

export const { setCars } = carListSlice.actions;

export default carListSlice.reducer;