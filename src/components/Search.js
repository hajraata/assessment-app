import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { findProducts, updateSelectedCategory } from "../redux/actions.js";

export default function Search() {
  const dispatch = useDispatch();

  const updateCategory = () => {
    dispatch(updateSelectedCategory("all"));
  };

  const searchForProduct = (e) => {
    dispatch(findProducts(e.target.value));
  };

  // const showSearchBar = () => {
  //   setShowSeacrh(!showSearch);
  // };

  return (
    // <Container className="mt-3">

    <Row className="mx-5 mt-5">
      <Col>
        <Form>
          <Form.Control
            onFocus={() => updateCategory()}
            placeholder="Search"
            onChange={(e) => searchForProduct(e)}
          />
        </Form>
      </Col>
    </Row>
    // </Container>
  );
}
