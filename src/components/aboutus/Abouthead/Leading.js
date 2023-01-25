import React from "react";
import { Col, Row } from "react-bootstrap";
// import { Controller } from 'swiper'
import "./abouthead.css";

const Leading = () => {
  return (
    <>
      <Row className="lead-row">
        <Col style={{ margin: "auto" }} sm={3}>
          <b>LEADING BY EXAMPLE</b>
          <p>
          Lazygone have long been renowned as the leading Broadband
            Company throughout Surrey, Sussex and the South East leading the
            charge in the Industries best practices as well as being at the
            forefront of the latest technological advancements.
          </p>
        </Col>
        <Col style={{ margin: "auto" }} sm={3}>
          <b>WE ARE PROFESSIONAL</b>
          <p>
            Have you ever called for a service and the technician shows up with
            a messy vehicle that has trash falling out of it? Have you ever had
            an experience where a technician has a bad attitude or is rude to
            you? Have you ever had a technician that acts like he wants to be
            somewhere else? We know we have!
          </p>
        </Col>
        <Col style={{ margin: "auto" }} sm={3}>
          <b>WHY CHOOSE US OVER OUR COMPETITORS?</b>
          <p>
          Lazygone wants you to have a broadband experience that you can
            enjoy without having to deal with all the stress of maintaining it.
            We promise to treat you with honor and integrity while providing you
            with an excellent service.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Leading;
