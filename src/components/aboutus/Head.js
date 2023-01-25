import React from "react";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";

export const Head = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "white",paddingBottom:"30px",paddingTop:"20px" }}>
          <Row className="about-flex">
            <Col sm={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="img/gif.gif"
                alt=""
              />
            </Col>
            <Col sm={6}>
              <p>
                Broadband Service takes pride in providing high quality service
                with a timely response to customer's service needs. We feature:
              </p>
              <ul>
                <li className="list-about">
                  25 real-time GPS tracked trucks for quick emergency service
                </li>
                <li className="list-about">
                  Factory trained and certified broadband service technicians
                </li>
                <li className="list-about">
                  Openings, closings, valet broadband cleaning, repairs and
                  broadband cover storage
                </li>
                <li className="list-about">
                  Expert leak detection for all brands of broadbands using the
                  latest technology including fiber optics, sonar, and ground
                  penetrating equipment
                </li>
                <li className="list-about">Major broadband renovation</li>
                <li className="list-about">Authorized Blue Haven broadbands Service Center</li>
              </ul>
            </Col>
          </Row>
      </Container>
    </>
  );
};
