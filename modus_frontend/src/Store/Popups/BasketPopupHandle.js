import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const basketPopupHanlde = createSlice({
    name: 'basketPopupHanlde',
    initialState,
    reducers: {
        toggleBasketPopup: (state,{payload: sta}) => {
            console.log(state)
            return state=sta
        }
    }
})

export const { actions, reducer } = basketPopupHanlde;