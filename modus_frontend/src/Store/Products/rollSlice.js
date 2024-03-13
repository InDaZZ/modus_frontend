import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const rollSlice = createSlice({
    name: 'Rolls',
    initialState,
    reducers: {
        addRolls: (state, { payload: roll }) => {
            if (state.length === 0) {
                state.push(...roll)
            }
            return
        }
    }
})

export const { actions, reducer } = rollSlice;