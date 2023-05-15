import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/cart.css";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeItemFromCart,
//   updateCartTotal,
// } from "../redux/actions.js";
import ProductCard from "../components/ProductCard";
// import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  // const cartTotal = useSelector((state) => state.cart.cartTotal);
  // const dispatch = useDispatch();

  const [cartTotal, setCartTotal] = useState(0);

  const shipping = 20;
  useEffect(() => {
    let initialValue = 0;

    let total = cart.reduce(function (acc, item) {
      return acc + item.total;
    }, initialValue);

    setCartTotal(total);

    // dispatch(updateCartTotal(total));
  }, [cart]);

  // const decrementQuantity = (product) => {
  //   if (product.quantity > 1) {
  //     dispatch(decreaseQuantity(product));
  //   } else {
  //     dispatch(removeItemFromCart(product));
  //   }
  // };

  // const incrementQuantity = (product) => {
  //   dispatch(increaseQuantity(product));
  // };

  // const removeFromCart = (product) => {
  //   dispatch(removeItemFromCart(product));
  // };

  return cart.length > 0 ? (
    <Row className="d-flex my-4 mx-2">
      <Col className="d-flex flex-wrap cart-products">
        {cart.map((product) => (
          <Col lg={4} md={6} sm={12} key={product.id} className="each-product">
            <ProductCard product={product} />
          </Col>
        ))}
      </Col>
      {/* <Table className="cart-table">
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
                  <Button
                    onClick={() => decrementQuantity(product)}
                    variant="dark"
                  >
                    -
                  </Button>
                  {product.quantity}
                  <Button
                    onClick={() => incrementQuantity(product)}
                    variant="dark"
                  >
                    +
                  </Button>
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
          </tbody>
        </Table>
      </Col> */}

      <Col sm={6} md={4}>
        <Table
          borderless
          bgcolor="lightgrey"
          className="mt-4 order-summary-container"
        >
          <thead>
            <tr>
              <th> Order Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cart Total:</td>
              <td>${cartTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Standard Shipping:</td>
              <td>${shipping}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>${(cartTotal + shipping).toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div>
                  <Button variant="dark">Checkout</Button>
                </div>
              </td>
            </tr>
          </tfoot>

          {/* <tr>
            <td>
              <Button variant="dark">Checkout</Button>
            </td>
          </tr> */}
        </Table>
      </Col>
    </Row>
  ) : (
    <div className="empty-message">
      <h6>Your Shopping Cart Is Empty</h6>
    </div>
  );
}
