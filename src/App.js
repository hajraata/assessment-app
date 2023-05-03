import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
