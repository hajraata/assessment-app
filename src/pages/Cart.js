import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/cart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  updateCartTotal,
} from "../redux/actions.js";
// import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    let initialValue = 0;

    let total = cart.reduce(function (acc, item) {
      return acc + item.total;
    }, initialValue);

    dispatch(updateCartTotal(total));
  }, [cart, dispatch]);

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decreaseQuantity(product));
    }
  };

  const incrementQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const removeFromCart = (product) => {
    dispatch(removeItemFromCart(product));
  };

  return cart.length > 0 ? (
    <>
      <Table className="cart-table">
        <thead className="table-headings">
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr className="each-item" key={product.id}>
              <td className="img-container">
                <img
                  src={product.image}
                  alt="product here"
                  className="item-img"
                />
              </td>
              <td className="item-name">{product.title}</td>
              <td>${product.price}</td>
              <td className="quantity-data">
                <Button onClick={() => decrementQuantity(product)}>-</Button>
                {product.quantity}
                <Button onClick={() => incrementQuantity(product)}>+</Button>
              </td>
              <td className="product-total">${product.total.toFixed(2)}</td>
              <td>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => removeFromCart(product)}
                ></i>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <b>Sub Total :</b> ${cartTotal.toFixed(2)}
              <br />
              <Button>Checkout</Button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  ) : (
    <div className="empty-message">
      <h6>Your Shopping Cart Is Empty</h6>
    </div>
  );
}
