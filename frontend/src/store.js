// redux toolkit setup
import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  timeInputsReducer,
  activeFiltersReducer,
  carListReducer,
  apiSlice,
  currentPageSlice,
  homeSlice,
  searchSlice,
} from "./redux";

// create store
const store = configureStore({
  reducer: {
    auth: authReducer,
    timeInputs: timeInputsReducer,
    activeFilters: activeFiltersReducer,
    carList: carListReducer,
    apiSlice,
    currentPageSlice,
    homeSlice,
    searchSlice,
  },
});

export default store;
