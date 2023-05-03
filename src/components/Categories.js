import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeCategories, updateSelectedCategory } from "../redux/actions.js";
import "../styles/categories.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Categories() {
  const selectedcategory = useSelector(
    (state) => state.products.selectedcategory
  );
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  // gets all categories from the category 
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      console.log(result);

      dispatch(storeCategories(result));
    };

    getCategories();
  }, [dispatch]);

  const updateCategory = (category) => {
    dispatch(updateSelectedCategory(category));
  };

  console.log(selectedcategory);

  return (
  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="categories-list">
            <Nav.Link onClick={() => updateCategory("all")}>ALL</Nav.Link>
            {categories.map((category) => (
              <Nav.Link onClick={() => updateCategory(category)} key={category}>
                {category.toUpperCase()}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
