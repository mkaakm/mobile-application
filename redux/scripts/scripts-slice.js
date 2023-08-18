import {createSlice} from "@reduxjs/toolkit";

import items from "./items";

const initialState = {
    items: [...items],
    step: 0,
}

const scriptsSlice = createSlice({
    name: "scripts",
    initialState,
    reducers: {
        nextStep:(state) => {
            state.step = Boolean(state.step) ? 0 : 1;
        }
    }
})

export const {nextStep} = scriptsSlice.actions;

export default scriptsSlice.reducer;