import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        fetchFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }, addToQty: (state, action) => {
            const item = action.payload
            const newItem = state.products.find(p => p.id === item.id)
            if (!newItem) return
            if (newItem) {
                newItem.qty += 1
            }

        }, removeQty: (state, action) => {
            const item = action.payload
            const newItem = state.products.find(p => p.id === item.id)
            if (!newItem) return
            if (newItem.qty < 0) {
                return
            }
            if (newItem) {
                newItem.qty -= 1
            }
        }
    }
})

export const { fetchStart, fetchSuccess, fetchFail, addToQty, removeQty } = productSlice.actions
export default productSlice.reducer