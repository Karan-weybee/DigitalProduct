import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/productSlice'
import userSlice from "../slices/userSlice";
import wishListSlice from "../slices/wishListSlice";
import tagSlice from "../slices/tagSlice";

export const store = configureStore({
    reducer:{productSlice,userSlice,wishListSlice,tagSlice}
}) 