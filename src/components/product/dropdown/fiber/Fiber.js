import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../../../../layout";
import "./fiber.css";

const Fiber = () => {
  return (
    <Layout>
      <Container className="fiber-container" fluid>
        <Row><div>Fiber</div>
          <div>Comming Soon!</div>
        </Row>
      </Container>
    </Layout>
  );
};

export default Fiber;
