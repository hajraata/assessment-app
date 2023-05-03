import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navigation-container" bg="dark">
        <Navbar.Brand onClick={() => navigate("/")} className="brand-name">
          M. Mall
        </Navbar.Brand>
        <Nav.Link onClick={() => navigate("/wishlist")}>Wishlist</Nav.Link>
        <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
      </Navbar>
    </>
  );
}
