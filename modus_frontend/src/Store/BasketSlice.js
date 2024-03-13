import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('basket')) || [];


export const basketSlice = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        addToBasket: (state, { payload: product }) => {
            const isExists = state.some(p => p._id === product._id)
            const index = state.findIndex(item => item._id === product._id)
            if (isExists) {

                const currentObject = JSON.parse(JSON.stringify(state[index]))
                if (index !== -1) {
                    if (currentObject.quantityСounter !== undefined) {
                        let quantity = currentObject.quantityСounter
                        state.splice(index, 1, { ...currentObject, quantityСounter: ++quantity })
                        return localStorage.setItem('basket', JSON.stringify(state))
                    }
                }
            }
            else (state.push({ ...product, quantityСounter: 1 }))
            return localStorage.setItem('basket', JSON.stringify(state))//удалить позхже
        },
        removeFromBasket: (state, { payload: product }) => {
            const isExists = state.some(p => p._id === product._id)
            const index = state.findIndex(item => item._id === product._id)
            if (isExists) {

                const currentObject = JSON.parse(JSON.stringify(state[index]))
                if (index !== -1) {
                    if (currentObject.quantityСounter !== undefined && currentObject.quantityСounter !== 1) {
                        let quantity = currentObject.quantityСounter
                        state.splice(index, 1, { ...currentObject, quantityСounter: --quantity })
                        return localStorage.setItem('basket', JSON.stringify(state))
                    }
                    else (state.splice(index, 1))
                }
            }
            return localStorage.setItem('basket', JSON.stringify(state))//удалить позхже
        },
        clearBasket: (state) => {
            localStorage.removeItem('basket')
            return state = []
        }
    }
})

export const { actions, reducer } = basketSlice;