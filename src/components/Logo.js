import React from "react";
import Row from "react-bootstrap/Row";
import "../styles/logo.css";

export default function Logo() {
  return (
    <Row className="d-flex justify-content-center my-4 w-100">
      <img
        className="logo-img"
        src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png"
        alt="J. Junaid Jamshed"
      />
    </Row>
  );
}
