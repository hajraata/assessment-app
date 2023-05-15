import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../redux/actions.js";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/productcard.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProdToWishList = (product) => {
    dispatch(addToWishList({ ...product, inwishlist: "true" }));
  };

  const removeFromProdWishList = (product) => {
    dispatch(removeFromWishList(product));
  };

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decreaseQuantity(product));
    } else {
      dispatch(removeItemFromCart(product));
    }
  };

  const incrementQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const removeFromCart = (product) => {
    dispatch(removeItemFromCart(product));
  };

  return (
    <Card className="card-container">
      {/* <h2>{product.title}</h2> */}
      <div className="card-img-container">
        <Card.Img src={product.image} className="card-img" />
      </div>

      <Card.Body className="card-content">
        <Card.Title
          className="product-name"
          onClick={() =>
            navigate("/product-details", { state: { product: product } })
          }
        >
          {product.title.toUpperCase()}
        </Card.Title>

        <Card.Text className="product-price">
          ${product.price}
          {/* {product.description} */}
        </Card.Text>

        {window.location.pathname !== "/cart" ? (
          <div className="btns-container">
            <Button
              variant="dark"
              size="md"
              className="btn-addtocart"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              Add To Cart
            </Button>

            {product.inwishlist === "false" ? (
              <i
                className="fa-regular fa-heart fa-xl"
                onClick={() => addProdToWishList(product)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-heart fa-xl"
                onClick={() => removeFromProdWishList(product)}
              ></i>
            )}
          </div>
        ) : (
          <>
            <div className="btns-container">
              <Button onClick={() => decrementQuantity(product)} variant="dark">
                -
              </Button>
              {product.quantity}
              <Button onClick={() => incrementQuantity(product)} variant="dark">
                +
              </Button>

              <i
                className="fa-solid fa-trash"
                onClick={() => removeFromCart(product)}
              ></i>
            </div>

            <div className="text-left mt-1 ">Sub Total: ${product.total}</div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
