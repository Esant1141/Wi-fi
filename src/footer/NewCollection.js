import React from "react";
import Layout from "../layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const NewCollection = () => {
  return (
    <Layout>
      <Container fluid className="form-new-collection">
        <Row>
<Col sm={1}></Col><Col sm={10}>
       
        <Form className="form-new-collection">
          <Form.Label className="heading-new-coll">New Connection</Form.Label>
          <Form.Select  className="new-coll-input" aria-label="Default select example">
            <option className="option-form">Service Type *</option>
            <option className="option-form" value="1">High Speed Fiber Internet</option>
            <option className="option-form" value="2">IPTV, OTT</option>
            <option className="option-form" value="3">Intercom & Telephony</option>
            <option className="option-form" value="3">Enterprise</option>
          </Form.Select><br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="new-coll-input"
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="new-coll-input"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="new-coll-input"
              type="number"
              placeholder="Phone Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="new-coll-input"
              type="text"
              placeholder="City"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="new-coll-input"
              type="text"
              placeholder="Area"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <hr />
          <p><i  class="fa">&#xf095;</i> &nbsp;Connect through Call and Whatsapp</p>
          <h4>+91 8477098105</h4>    <h4>+91 8171100471</h4>
        </Form></Col><Col sm={1}></Col> </Row>
      </Container>
    </Layout>
  );
};

export default NewCollection;
