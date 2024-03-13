import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as rollReducer } from './Products/rollSlice.js';
import { reducer as pizzaReducer } from './Products/pizzaSlice.js';
import { reducer as basketReducer } from './BasketSlice.js'
import { reducer as basketPopupReducer } from './Popups/BasketPopupHandle.js'

const reducers = combineReducers({
    allRolls: rollReducer,
    allPizzas: pizzaReducer,
    basket: basketReducer,
    basketPopupHandle: basketPopupReducer,
})

export const store = configureStore({
    reducer: reducers
})