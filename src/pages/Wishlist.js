import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.products.wishList);

  return wishlist.length > 0 ? (
    <Row className="products-container">
      {wishlist.map((product) => (
        <Col sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  ) : (
    <div className="empty-message">
      <h6>Your Wishlist Is Empty</h6>
    </div>
  );
}
