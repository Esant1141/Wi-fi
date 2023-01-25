import "./work.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { mainWorkFunction } from "./workArray";

function Work() {
  return (
    <>
      <Container fluid className="work-gradient">
        <p className="workHeading">How does it works ?</p>
        <img className="imgs" src="img/line.png" alt="" />
        <Container>
          <Row xs={1} md={2} className="g-4 work-row">
           {mainWorkFunction}
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Work;
