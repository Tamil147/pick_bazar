import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/productSlice";
import cartReducer from '../Slice/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})

export default store