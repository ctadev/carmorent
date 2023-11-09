import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    capacityFilters: [
        {
            name: '2 Person',
            count: 0,
            checked: true,
        },
        {
            name: '4 Person',
            count: 0,
            checked: true,
        },
        {
            name: '6 Person',
            count: 0,
            checked: true,
        },
        {
            name: '8 Person',
            count: 0,
            checked: true,
        }
    ],
    typeFilters: [
        {
            name: 'Sport',
            count: 0,
            checked: true,
        },
        {
            name: 'SUV',
            count: 0,
            checked: true,
        },
        {
            name: 'MPV',
            count: 0,
            checked: true,
        },
        {
            name: 'Sedan',
            count: 0,
            checked: true,
        },
        {
            name: 'Coupe',
            count: 0,
            checked: true,
        },
        {
            name: 'Hatchback',
            count: 0,
            checked: true,
        }
    ],
    searchFilter: '',
};

const activeFiltersSlice = createSlice({
    name: 'activeFilters',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const { category, name } = action.payload;
            const filter = state[category].find(filter => filter.name === name);
            filter.checked = !filter.checked;
        },
        updateSearch: (state, action) => {
            state.searchFilter = action.payload;
        },
        updateCounts: (state, action) => {
            const { typeCounts, capacityCounts } = action.payload;
            state.typeFilters.forEach((filter) => {
                filter.count = typeCounts[filter.name] || 0;
            });
            state.capacityFilters.forEach((filter) => {
                filter.count = capacityCounts[parseInt(filter.name, 10)] || 0;
            });
        },
    }
});

export const { updateFilter, updateSearch, updateCounts } = activeFiltersSlice.actions;

export default activeFiltersSlice.reducer;