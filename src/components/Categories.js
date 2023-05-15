import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { updateSelectedCategory } from "../redux/actions.js";

import "../styles/categories.css";
// import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

export default function Categories() {
  // const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  // gets all categories from the category api
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      //  console.log(result);
      setCategories(["all", ...result]);

      // dispatch(storeCategories(result));
    };

    getCategories();
  }, []);

  // update category on selection

  const updateCategory = (category) => {
    dispatch(updateSelectedCategory(category));
  };

  return (
    <>
      <ul className="categories-list">
        {categories.map((category) => (
          <li onClick={() => updateCategory(category)} key={category}>
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse>
    //       <Nav className="categories-list">
    //         <Nav.Link onClick={() => updateCategory("all")}>ALL</Nav.Link>
    //         {categories.map((category) => (
    //           <Nav.Link onClick={() => updateCategory(category)} key={category}>
    //             {category.toUpperCase()}
    //           </Nav.Link>
    //         ))}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
