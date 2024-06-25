import { configureStore } from "@reduxjs/toolkit";
import planeReducer from "./plane/planeSlice";
import planesReducer from './planes/planesSlice';
import searchCounterSlice from "./search/reducer";

export const store = configureStore(({
    reducer: {
        planes: planesReducer,
        plane: planeReducer,
        search: searchCounterSlice,
    }
}))