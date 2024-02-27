import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const Store = configureStore({
    reducer:{
   cartReducer:cartReducer
    }
})
export default Store