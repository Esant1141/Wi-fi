import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./skew.css";

import Button from "react-bootstrap/Button";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-main">
        <Row>
          <Col className="main-col-modal" sm={6}>
            <Row className="row-buy-btn">
            <h3>Entertainment</h3>
              <Col sm={6}>
                Monthly Rental<p>₹499</p>
              </Col>

              <Col sm={6}>
                <Link to="/buy">
                  {" "}
                  <Button className="change-plan">BUY NOW</Button>
                </Link>
              </Col>
            </Row>
            <Row className="facility">
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
            </Row>
          </Col>
          <Col className="main-col-modal" sm={6}>
            <h3>Basic</h3>
            <Row className="row-buy-btn">
              <Col sm={6}>
                Monthly Rental<p>₹799</p>
              </Col>

              <Col sm={6}>
                <Link to="/buy">
                  {" "}
                  <Button className="change-plan">BUY NOW</Button>
                </Link>
              </Col>
            </Row>
            <Row className="facility">
              <Col sm={3}>Unlimited Data</Col>

              <Col sm={3} className="btn-buy-div">
                OTT-8
              </Col>
              <Col sm={3} className="btn-buy-div">
                Upto 100mbps{" "}
              </Col>
              <Col sm={3} className="btn-buy-div">
                100+ Live Channel
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="main-col-modal" sm={6}>
            <h3>Standard</h3>
            <Row className="row-buy-btn">
              <Col sm={6}>
                Monthly Rental<p>₹999</p>
              </Col>

              <Col sm={6}>
                <Link to="/buy">
                  {" "}
                  <Button className="change-plan">BUY NOW</Button>
                </Link>
              </Col>
            </Row>
            <Row className="facility">
              <Col sm={3}>Unlimited Data</Col>

              <Col sm={3} className="btn-buy-div">
                OTT-10
              </Col>
              <Col sm={3} className="btn-buy-div">
                Upto 150mbps{" "}
              </Col>
              <Col sm={3} className="btn-buy-div">
                100+ Live Channel
              </Col>
            </Row>
          </Col>
          <Col className="main-col-modal" sm={6}>
            <h3>Professional</h3>
            <Row className="row-buy-btn">
              <Col sm={6}>
                Monthly Rental<p>₹1399</p>
              </Col>

              <Col sm={6}>
                <Link to="/buy">
                  <Button className="change-plan">BUY NOW</Button>
                </Link>
              </Col>
            </Row>
            <Row className="facility">
              <Col sm={3}>Unlimited Data</Col>

              <Col sm={3} className="btn-buy-div">
                OTT-12
              </Col>
              <Col sm={3} className="btn-buy-div">
                Upto 200mbps{" "}
              </Col>
              <Col sm={3} className="btn-buy-div">
                100+ Live Channel
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className="back" onClick={props.onHide}></Button>
      </Modal.Body>
    </Modal>
  );
}

export default function Modal1() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="btn-buy" onClick={() => setModalShow(true)}>
        Change Plan
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);
