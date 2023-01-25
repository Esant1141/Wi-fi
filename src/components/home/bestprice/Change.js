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

const Change = (props) => {
  return (
    <>
      <Layout>
        <Container fluid className="buy-container">
          {/* <Row>
            <Row>
              <Col style={{ padding: "30px" }} sm={7}>
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
                  <Form.Select className="input-buy" aria-label="Default select example">
                    <option>City</option>
                    <option value="1">Delhi</option>
                    <option value="2">Chennai</option>
                    <option value="3">Gurugram</option>
                  </Form.Select><br />
              
                  <Button className="submit-basic" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col
                style={{
                  padding: "30px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                sm={5}
              >
                <h3>Standard</h3>
                <Row className="row-buy-btn">
                  <Col sm={6}>
                    Monthly Rental<p>₹999</p>
                  </Col>

                  <Col sm={6}>
                    <Modal1 />
                  </Col>
                </Row>
                <Row
                  style={{ display: "flex", padding: "10px", fontSize: "14px" }}
                >
                  <Col sm={3}>Unlimited Data</Col>

                  <Col sm={3} className="btn-buy-div">
                    OTT-5
                  </Col>
                  <Col sm={3} className="btn-buy-div">
                    Upto 50mbps{" "}
                  </Col>
                  <Col sm={3} className="btn-buy-div">
                    100+ Live Channel
                  </Col>
                  <p>Includes Airtel Thanks benefit</p>
                </Row>
                <div className="scrollmenu">
                  <div>
                    <img width={"50px"} src="img/altbalaji.png" alt="" />
                    <p>ALTbalaji</p>
                  </div>
                  <div>
                    <img width={"50px"} src="img/epic.png" alt="" />
                    <p>Epic on</p>
                  </div>
                  <div>
                    <img width={"50px"} src="img/erosenow.png" alt="" />
                    <p>erosenow</p>
                  </div>
                  <div>
                    <img width={"50px"} src="img/dollywood.webp" alt="" />
                    <p>dollywood</p>
                  </div>{" "}
                  <div>
                    <img width={"50px"} src="img/dr.png" alt="" />
                    <p>DR Happiness</p>
                  </div>{" "}
                </div>
              </Col>
            </Row> */}
          {/* </Row> */}
        </Container>
      </Layout>
    </>
  );
};

export default Change;
