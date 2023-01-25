import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <>
      <div>
        <img style={{ width: "100%" }} src="img/con2.png" alt="" />
      </div>
      <Container className="contact-container" fluid>
        <Row>
          <Col sm={4} className="form-padding-col4">
            <h3 className="cityinfosol">CITY INFOSOL PVT. LIMITED</h3>
            <div className="city-div-flex">
              <div>
                <i className="material-icons ii1">&#xe55c;</i>
              </div>
              &nbsp;
              <div>
                <b className="bold-heading">REGISTERED OFFICE:</b>
                <pre className="pre">LazygoneNetwork private Ltd, <br />Shree Shirdi Sai Complex 2nd<br />Floor Kothiwal Nagar<br />Distt - Moradabad (up) 244001</pre>
              </div>
            </div>

            <div className="city-div-flex">
              <div>
                <i class="fa ii">&#xf095;</i>
              </div>
              &nbsp;
              <div>
                <b className="bold-heading">CALL US:</b>
                <p>+91 8477098105, 8171100471, 9456212342</p>
              </div>
            </div>
            <div>
              <b className="bold-heading">HAVE YOU ANY QUESTIONS?</b>
              <div className="city-div-flex">
                <div>
                  <i className="fa ii">&#xf0e0;</i>
                </div>
                &nbsp;&nbsp;
                <div>
                  <p>lazygonenetwork@gmail.com</p>
                </div>
              </div>
              <div className="city-div-flex">
                <div>
                  <i className="fa ii">&#xf0ac;</i>
                </div>
                &nbsp;&nbsp;
                <div>
                  <p> www.lazygone.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={8} className="form-padding-col8">
            <Form>
              <h1 className="heading"> GET IN TOUCH</h1>
              <div className="input-flex">
                <div className="input-auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="input-contact"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                </div>{" "}
                &nbsp;&nbsp;
                <div className="input-auto">
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      className="input-contact"
                      type="number"
                      placeholder="Enter phone"
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input-contact"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="input-contact"
                  as="textarea"
                  rows={5}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
