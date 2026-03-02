import { createSlice } from "@reduxjs/toolkit";
import { loadDataFromStorage, updateDataInLocalStorage } from "../help/storeInLocalStorage";

const initial = loadDataFromStorage()
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: initial,
    },
    reducers: {
        addtocart: (state, action) => {
            const newItem = action.payload
            const existe = state.carts.find(p => p.id === newItem.id)

            if (existe) {
                existe.qty += 1
            } else {
                state.carts.push({ ...newItem, qty: 1 })
            }
            updateDataInLocalStorage(state.carts)
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((pro) => pro.id !== action.payload)
            updateDataInLocalStorage(state.carts)
        },
        increaseQty: (state, action) => {

            const item = state.carts.find(p => p.id === action.payload)
            if (item) item.qty += 1
            updateDataInLocalStorage(state.carts)
        },
        decreaseQty: (state, action) => {
            const item = state.carts.find(p => p.id === action.payload)
            if (item.qty == 1) {
                state.carts = state.carts.filter(p => p.id !== action.payload)
            }
            if (item && item.qty > 1) item.qty -= 1
            updateDataInLocalStorage(state.carts)
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(p => p.id !== action.payload)


            updateDataInLocalStorage(state.carts)
        }
    }
})

export const { addtocart, removeFromCart, increaseQty, decreaseQty, removeCart } = cartSlice.actions
export default cartSlice.reducer