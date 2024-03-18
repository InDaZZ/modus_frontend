import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: false,
    admin: false,
    changeProduct:false,
};

export const basketPopupHanlde = createSlice({
    name: 'basketPopupHanlde',
    initialState,
    reducers: {
        toggleBasketPopup: (state, { payload: toggle }) => {
            console.log(toggle)
            return state = {...state, ...toggle}
        }
    }
})

export const { actions, reducer } = basketPopupHanlde;