import React from "react";
import "./skew.css";
import Carousel from "react-bootstrap/Carousel";
import { mainSkewFun } from "./SkewArray";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";

const Skew = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="skew-col1" sm={6}>
            <div className="skew-div1">
              <h1>
                <b>Customer Benifits</b>
              </h1>
              <b>
                {" "}
                <p>
                  All Reeltime packages provides ultra-fast speeds with no
                  limits and money back guarantee{" "}
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;No FUP, No
                  Data Limits
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;Unlimited
                  Internet, Unlimited Peering
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;Online
                  Payments
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;No Hidden
                  Charges
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;100% Money
                  Back Guarantee
                </p>
                <p className="p-background">
                  <i class="fa icon-background">&#xf138;</i>&nbsp;Unlimited for
                  a Single Household
                </p>
                <h2>
                  <b>Call us Today</b>
                </h2>
                <p className="p-background">+91 8477098105 +91 8171100471</p>
              </b>
            </div>
          </Col>
          <Col sm={6} className="skew-col2">
            <div className="skew">
              <div className="verticle">
                <div className="sk1">
                  <Carousel>{mainSkewFun}</Carousel>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Skew;
