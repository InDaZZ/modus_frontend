import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions as allRolls } from '../Store/Products/rollSlice.js'
import { actions as allPizzas } from '../Store/Products/pizzaSlice.js'
import { actions as basket } from "../Store/BasketSlice.js"
import { actions as basketPopupHandler } from '../Store/Popups/BasketPopupHandle.js'

const rootActions = {
    ...allRolls,
    ...allPizzas,
    ...basket,
    ...basketPopupHandler,
}

console.log(rootActions)

export const useAction = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}