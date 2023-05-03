import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers.js/productsReducer";
import { cartReducer } from "./reducers.js/cartReducer";

export const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
  devTools: true,
});
