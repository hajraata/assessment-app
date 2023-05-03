import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.products.wishList);

  return wishlist.length > 0 ? (
    <div className="products-container">
      {wishlist.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <div className="empty-message">
      <h6>Your Wishlist Is Empty</h6>
    </div>
  );
}
