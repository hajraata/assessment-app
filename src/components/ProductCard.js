import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
} from "../redux/actions.js";
import "../styles/productcard.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            navigate("/productdetails", { state: { product: product } })
          }
        >
          {product.title}
        </Card.Title>
        <p className="product-price">${product.price}</p>
        <Card.Text className="productdetails-truncate">
          {product.description}
        </Card.Text>
        <div className="btns-container">
          <Button
            variant="dark"
            size="md"
            className="btn-addtocart"
            onClick={() => addProductToCart(product)}
          >
            Add To Cart
          </Button>

          {product.inwishlist === "false" ? (
            <div className="wishlist-btn">
              <i
                className="fa-regular fa-heart fa-lg"
                onClick={() => addProdToWishList(product)}
              ></i>
            </div>
          ) : (
            <div className="wishlist-btn">
              <i
                className="fa-solid fa-heart fa-lg"
                onClick={() => removeFromProdWishList(product)}
              ></i>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
