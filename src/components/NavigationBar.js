import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import "../styles/navigation.css";

export default function NavigationBar() {
  const cart = useSelector((state) => state.cart.cart);
  const wishList = useSelector((state) => state.products.wishList);
  const itemsInCart = cart.length;
  const itemsInWishList = wishList.length;
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light" className="d-flex px-4 nav-font">
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="flex-grow-1 nav-font nav-home"
        >
          WELCOME TO J.
        </Navbar.Brand>
        <Col className="d-flex justify-content-evenly" xs={3} md={1}>
          <Nav.Link onClick={() => navigate("/wish-list")}>
            <i className="fa-solid fa-heart fa-lg"></i>
            {itemsInWishList !== 0 ? (
              <Badge className="ms-2" bg="dark">
                {itemsInWishList}
              </Badge>
            ) : (
              <></>
            )}
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/cart")}>
            <i className="fa-solid fa-bag-shopping fa-lg"></i>
            {itemsInCart !== 0 ? (
              <Badge className="ms-2" bg="dark">
                {itemsInCart}
              </Badge>
            ) : (
              <></>
            )}
          </Nav.Link>
          {/* <Nav.Link>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            Search
          </Nav.Link> */}
        </Col>
      </Navbar>
    </>
  );
}
