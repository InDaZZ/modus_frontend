import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('pizzas')) ? JSON.parse(localStorage.getItem('pizzas')) : [];

export const pizzaSlice = createSlice({
    name: 'Pizzas',
    initialState,
    reducers: {
        addPizzas: (state, { payload: pizza }) => {
            if (state.length === 0) {
                state.push(...pizza)
            }
            return
        }
    }
})

export const { actions, reducer } = pizzaSlice;