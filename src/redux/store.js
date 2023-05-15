import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./reducers.js/productsReducer";
import { cartReducer } from "./reducers.js/cartReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
});
