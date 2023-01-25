import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StickyFooter from "../../../footer/Stickyfooter";
import Header from "../../../navbar/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BrandExample from "../../../navbar/Header1";
import Header2 from "../../../navbar/Header2";
import Modal1 from "./Modal";
import "./skew.css";
import Layout from "../../../layout";
import { mainServiceFun, mainServiceImgFun } from "./util";

const Buy = (props) => {
  return (
    <>
      <Layout>
        <Container fluid className="buy-container">
          <Row>
            <Row>
              <Col sm={1}></Col>
              <Col className="main-col-modal" sm={7}>
                <h4>Enter your installation details</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="input-buy"
                      type="email"
                      placeholder="Your Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="input-buy"
                      type="password"
                      placeholder="Your Mobile Number"
                    />
                  </Form.Group>
                  <Form.Select
                    className="input-buy"
                    aria-label="Default select example"
                  >
                    <option>City</option>
                    <option value="1">Delhi</option>
                    <option value="2">Chennai</option>
                    <option value="3">Gurugram</option>
                  </Form.Select>
                  <br />
                  <Button className="submit-basic" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col className="buy-box" sm={3}>
                <h3>Basic</h3>
                <Row className="row-buy-btn">
                  <Col sm={6}>
                    Monthly Rental<p>₹999</p>
                  </Col>
                  <Col sm={6}>
                    <Modal1 />
                  </Col>
                </Row>
                <Row className="service-item">
                  {mainServiceFun}
                  <p>Includes Lazygone benefit</p>
                </Row>
                <div className="scrollmenu">{mainServiceImgFun}</div>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Buy;
