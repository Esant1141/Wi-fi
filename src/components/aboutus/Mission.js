import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mission.css";

const Mission = () => {
  return (
    <>
      {/* <Container fluid className="mission-container">
        <Row>
          <Col sm={6}>
            <div>esrdfgvhb</div>
          </Col>{" "}
          <Col sm={6}>
            <div>esrdfgvhb</div>
          </Col>
        </Row>
      </Container> */}
      <Container fluid className="mission-container">
        <p className="about">Mission & Vision</p>
        <Row>
          <Col md={6}>
            <p style={{ fontSize: "25px", fontWeight: "600" }}>
            LAZYGONE VISION
            </p>
            <div className="about-flex-div">
              <div className="about-div-img">
                <img
                  style={{ width: "100%", height: "80%" }}
                  src="img/vission.jpg"
                  alt=""
                />
              </div>
              <div className="about-flex-div">
                <p>
                  Our vision is to revolutionise broadband services in Moradabad
                  by providing simple-to-understand yet state-of-the-art
                  services that will enable people of our city to do so much
                  more in their daily lives, thereby bringing them unprecedented
                  advantage and joy, ultimately resulting in their success. We
                  have served business and home consumers since 2004 and have
                  grown to deliver the most amazing internet experience to our
                  consumers today.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <p style={{ fontSize: "25px", fontWeight: "600" }}>
              LAZYGONE MISSION
            </p>
            <div className="about-flex-div">
              <div  className="about-div-img">
                <img
                  style={{ width: "100%", height: "80%" }}
                  src="img/mission.jpg"
                  alt=""
                />
              </div>
              <div className="about-flex-div">
                <p>
                  Our mission is to revolutionise broadband services in Moradabad
                  by providing simple-to-understand yet state-of-the-art
                  services that will enable people of our city to do so much
                  more in their daily lives, thereby bringing them unprecedented
                  advantage and joy, ultimately resulting in their success. We
                  have served business and home consumers since 2004 and have
                  grown to deliver the most amazing internet experience to our
                  consumers today.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mission;
