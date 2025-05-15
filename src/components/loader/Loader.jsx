import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} className="text-center">
          <InfinitySpin width="200" color="#ffb32d" />
        </Col>
      </Row>
    </Container>
  );
}

export default Loader;
