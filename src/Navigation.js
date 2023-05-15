import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function Navigation() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/ecommerce-app" element={<Home />} />
        <Route path="/wish-list" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
