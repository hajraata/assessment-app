import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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

  return (
    <Container className="mt-3">
      <Row>
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
    </Container>
  );
}
