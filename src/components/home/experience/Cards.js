import React from "react";
import "./cards.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { mainCardFun } from "./cardArray";

function Zoombox(props) {
  const { title } = props.cardData;
  return (
    <Container fluid className="card-home-red">
      <p className="zoo">{title}</p>
      <p className="zoo1">
        We are pleased to introduce ourselves as leading and the largest Triple
        play Service provider Company working over FTTH (Fiber to the Home) in
        India through GPON (Gigabit passive optical network) Techonology.
      </p>
      <Row className="g-4">{mainCardFun}</Row>
    </Container>
  );
}
export default Zoombox;
