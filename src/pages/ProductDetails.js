import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { addToCart } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import "../styles/productdetails.css";

export default function ProductDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state.product;

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="productdetails-container">
      <div className="product-img-container">
        <img src={product.image} alt="product here" className="product-img" />
      </div>
      <div className="product-details-container">
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <div className="product-btns-container">
          <Button
            variant="dark"
            size="md"
            className="btn-addtocart"
            onClick={() => addProductToCart(product)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
